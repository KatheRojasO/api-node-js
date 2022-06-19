import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { createDeviceBrand } from '../../services/brandService';



export const NewBrand = ( { handleOpenModal, statusListing }) => {

  const [formValues, setFormValues] = useState({});
  const { name = '', status} = formValues;


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const brandSubmitted = {
      name, status,
    }
    console.log(brandSubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await createDeviceBrand(brandSubmitted);
      console.log(data);
      Swal.close();
      handleOpenModal();
      statusListing();

    } catch (error){
        console.log(error);
        Swal.close();
    }
  }
  
  return (
    <div className='sidebar'>
      <Container>
        <Row>
          <Col>
            <div className='sidebarHeader'>
              <h1>New Brand<hr/></h1>
              <i className="fa-solid fa-xmark" onClick={ handleOpenModal }></i>
            </div>
          </Col>
        </Row>

        <Form className='deviceForm' onSubmit={(e)=> handleOnSubmit(e)}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasic" >
                <Form.Label>Brand:</Form.Label>
                <Form.Control type="text"
                  value={ name } 
                  name="name"
                  onChange={ (e)=> handleOnChange(e) }
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId='formBasic'>
                <Form.Label>Brand status:</Form.Label>
                <Form.Select name="status" 
                  value = { status }
                  onChange={ (e)=> handleOnChange(e) } required>
                  <option>Select device status</option>
                  <option>active</option>
                  <option>inactive</option>
                </Form.Select>
              </Form.Group>
            </Col>        
          </Row>
          <Row>
            <Col>
              <Button type='submit'>
                <i className="fa-solid fa-check"></i>
              </Button>
            </Col>
          </Row>
        </Form>     
         
      </Container> 
    </div>
  )
}
