import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { getDeviceStatusById, editDeviceStatus } from '../../services/deviceStatusService';
import Swal from 'sweetalert2';


export const StatusUpdate = () => {

  const { deviceStatusId = '' } = useParams();
  
  const [deviceStatus, setDeviceStatus] = useState([]);

  const [formValues, setFormValues] = useState({});
  const { name='' , status } = formValues;
  

  useEffect (() => {
    const getStatus = async () => {
      try {
          const { data } = await getDeviceStatusById(deviceStatusId);
          setDeviceStatus(data);
          console.log(data)
      }catch (error){
          console.log(error)
      }
  }
    getStatus();
  }, [ deviceStatusId ]);

  
  useEffect (() => {
    setFormValues({
      name: deviceStatus.name,
      status: deviceStatus.status
    });
  }, [ deviceStatus ]);;
  

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const statusSubmitted = {
      name, status
    }
    console.log(statusSubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await editDeviceStatus(deviceStatusId, statusSubmitted);
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
            <Card.Title>Status:<hr/></Card.Title>
            
              <Form className='deviceForm' onSubmit={(e)=> handleOnSubmit(e)}>
                <Row>
                  <Col>
                    
                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>Device name:</Form.Label>
                      <Form.Control 
                        type="text"
                        name="name" 
                        value = {name}
                        onChange={ (e)=> handleOnChange(e) } required>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasic-update" >
                      <Form.Label>Device status:</Form.Label>
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