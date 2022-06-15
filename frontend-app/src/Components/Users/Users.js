import React, {useState, useEffect} from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { createUser, getUser } from '../../services/userService';
import Swal from 'sweetalert2';


export const Users = () => {

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({});
  const { name = '', email = '', status , creation_date='', update_date=''} = formValues;

  const userListing = async () => {
    try {
      const { data }= await getUser();
      console.log(data)
      setUsers(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    userListing();
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userSubmitted = {
      name, email, status, creation_date, update_date
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
      userListing();

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
              <h1>New User<hr/></h1>
            </div>
            <Form onSubmit={(e)=> handleOnSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={ name }
                  onChange={ (e)=> handleOnChange(e) }
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                  type="email"
                  name="email"
                  value={ email }
                  onChange={ (e)=> handleOnChange(e) }
                  required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User state:</Form.Label>
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
                <Form.Label>Create date:</Form.Label>
                <Form.Control 
                  type="date"
                  value={ creation_date }
                  name="creation_date"
                  onChange={ (e)=> handleOnChange(e) }  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Update date:</Form.Label>
                <Form.Control 
                  type="date"
                  value={ update_date }
                  name="update_date"
                  onChange={ (e)=> handleOnChange(e) }  />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                <i className="fa-solid fa-check"></i>
              </Button>
            </Form>
          </Col>
        </Row>

        <div className='mt-4 mb-4'>
          <h1>List of users<hr/></h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
              {
                users.map(user =>{
                  return([<tr><td key={user._id} value={user._id}> {user.name}</td>
                          <td key={user._id} value={user._id}> {user.email}</td>
                          <td key={user._id} value={user._id}> {user.status}</td></tr>
                ]
                )})
              }
                       
          </tbody>
        </Table>
      </Container>
      
    </>
  )
}
