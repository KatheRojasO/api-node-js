import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { getUserById, editUser } from '../../services/userService';
import Swal from 'sweetalert2';


export const UserUpdate = () => {

  const { userId = '' } = useParams();
  
  const [user, setUser] = useState([]);

  const [formValues, setFormValues] = useState({});
  const { name='' , email = '', status } = formValues;
  

  useEffect (() => {
    const getBrand = async () => {
      try {
          const { data } = await getUserById(userId);
          setUser(data);
          console.log(data)
      }catch (error){
          console.log(error)
      }
  }
    getBrand();
  }, [ userId ]);

  
  useEffect (() => {
    setFormValues({
      name: user.name,
      email: user.email,
      status: user.status
    });
  }, [ user ]);;
  

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userSubmitted = {
      name, email, status
    }
    console.log(userSubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await editUser(userId, userSubmitted);
      console.log(data);
      Swal.close();
      

    } catch (error){
        console.log(error);
        Swal.close();
    }
  }
  
  return (
    <>
      <Container>
        <Card className='mt-4 card-update' >
          <Card.Body>
            <Card.Title>Brand:<hr/></Card.Title>
            
              <Form className='deviceForm' onSubmit={(e)=> handleOnSubmit(e)}>
                <Row>
                  <Col>
                    
                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>User name:</Form.Label>
                      <Form.Control 
                        type="text"
                        name="name" 
                        value = {name}
                        onChange={ (e)=> handleOnChange(e) } required>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control 
                        type="text"
                        name="email" 
                        value = {email}
                        onChange={ (e)=> handleOnChange(e) } required>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasic-update" >
                      <Form.Label>User status:</Form.Label>
                      <Form.Select
                        value={ status } 
                        name="status"
                        onChange={ (e)=> handleOnChange(e) }
                        required >
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
            
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}