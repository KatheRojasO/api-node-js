import React, {useState, useEffect} from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { getDeviceBrand, createDeviceBrand } from '../../services/brandService';
import Swal from 'sweetalert2';


export const Brand = () => {
  
  const [brand, setBrand] = useState([]);
  const [formValues, setFormValues] = useState({});
  const { name = '',  status , creation_date='', update_date=''} = formValues;

  const brandListing = async () => {
    try {
      const { data }= await getDeviceBrand();
      console.log(data)
      setBrand(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    brandListing();
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const brandSubmitted = {
      name, status, creation_date, update_date
    }
    console.log(brandSubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await createDeviceBrand (brandSubmitted);
      console.log(data);
      Swal.close();
      brandListing();

    } catch (error){
        console.log(error);
        Swal.close();
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='mt-4 mb-4'>
              <h1>New Brand<hr/></h1>
            </div>
            <Form onSubmit={(e)=> handleOnSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Brand name:</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={name}
                  onChange={ (e)=> handleOnChange(e) }
                  required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status:</Form.Label>
                <Form.Select
                  name='status'
                  value={status}
                  onChange={ (e)=> handleOnChange(e)}
                  required>
                  <option>Select status</option>
                  <option>active</option>
                  <option>inactive</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Creation date:</Form.Label>
                <Form.Control 
                  type="date"
                  value={ creation_date }
                  name="creation_date"
                  onChange={ (e)=> handleOnChange(e) } />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Update date:</Form.Label>
                <Form.Control type="date"
                  value={ update_date }
                  name="update_date"
                  onChange={ (e)=> handleOnChange(e) } />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                <i className="fa-solid fa-check"></i>
              </Button>
            </Form>
          </Col>
        </Row>

        <div className='mt-4 mb-4'>
          <h1>List of active brands<hr/></h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            
              {
                brand.map(brand =>{
                  return([<tr><td key={brand._id} value={brand._id}> {brand.name}</td>
                          <td key={brand._id} value={brand._id}> {brand.status}</td></tr>
                          ]
                )})
              }          
          </tbody>
        </Table>
      </Container>
    </>
  )
}
