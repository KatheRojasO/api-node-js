import React, {useState, useEffect} from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { getDeviceStatus, createDeviceStatus } from '../../services/deviceStatusService';
import Swal from 'sweetalert2';

export const Status = () => {

  const [deviceStatus, setDeviceStatus] = useState([]);
  const [formValues, setFormValues] = useState({});
  const { name = '', status , creation_date='', update_date=''} = formValues;

  const deviceStatusListing = async () => {
    try{
      const { data }= await getDeviceStatus();
      console.log(data);
      setDeviceStatus(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    deviceStatusListing();
  }, []);


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const statusSubmitted = {
      name, status, creation_date, update_date
    }
    console.log(statusSubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await createDeviceStatus(statusSubmitted);
      console.log(data);
      Swal.close();
      deviceStatusListing();

    } catch (error){
        console.log(error);
        Swal.close();
    }
  }
  return (
    <>
      <Container>
        <Row>
          <div className='mt-4 mb-4'>
            <h1>New Status<hr/></h1>
          </div>
          <Col>
            <Form onSubmit={(e)=> handleOnSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Status name:</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={ name }
                  placeholder="in use, in warehouse, depreciated, reparation..."
                  onChange={ (e)=> handleOnChange(e) }
                  required  />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status:</Form.Label>
                <Form.Select
                  name='status'
                  value={status}
                  onChange={ (e)=> handleOnChange(e)}
                  required>
                  <option>Choose an option</option>
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
          <h1>List of device statuses<hr/></h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Devices status</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            
              {
                deviceStatus.map(deviceStatus =>{
                  return([<tr><td key={deviceStatus._id} value={deviceStatus._id}> {deviceStatus.name}</td>
                          <td key={deviceStatus._id} value={deviceStatus._id}> {deviceStatus.status}</td></tr>
                          ]
                )})
              }          
          </tbody>
        </Table>
      </Container>
      
    </>
  )
}
