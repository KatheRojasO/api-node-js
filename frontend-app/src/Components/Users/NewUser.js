import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { createUser } from '../../services/userService';



export const NewUser = ( { handleOpenModal, statusListing }) => {

  const [formValues, setFormValues] = useState({});
  const { name = '', email = '', status} = formValues;


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userSubmitted = {
      name, email, status,
    }
    console.log(userSubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await createUser(userSubmitted);
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
              <h1>New User<hr/></h1>
              <i className="fa-solid fa-xmark" onClick={ handleOpenModal }></i>
            </div>
          </Col>
        </Row>

        <Form className='deviceForm' onSubmit={(e)=> handleOnSubmit(e)}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasic" >
                <Form.Label>User name:</Form.Label>
                <Form.Control type="text"
                  value={ name } 
                  name="name"
                  onChange={ (e)=> handleOnChange(e) }
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasic" >
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text"
                  value={ email } 
                  name="email"
                  onChange={ (e)=> handleOnChange(e) }
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId='formBasic'>
                <Form.Label>User status:</Form.Label>
                <Form.Select name="status" 
                  value = { status }
                  onChange={ (e)=> handleOnChange(e) } required>
                  <option>Select user status</option>
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