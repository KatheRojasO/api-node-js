import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { getInventoryById, editInventory} from '../../services/inventoryService';
import { getUser } from '../../services/userService';
import { getDeviceBrand } from '../../services/brandService';
import { getDeviceStatus } from '../../services/deviceStatusService';
import { getDeviceType } from '../../services/typeStatusService';
import Swal from 'sweetalert2';


export const InventoryUpdate = () => {

  const { inventoryId = '' } = useParams();
  const [inventory, setInventory] = useState({});

  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState([]);
  const [type, setType] = useState([]);
  const [formValues, setFormValues] = useState({});
  const { serialNumber = '', model = '', description = '', 
    color = '', picture = '', purchaseDate = '', price = '', user, brand, deviceStatus, deviceType} = formValues;
  
  

  useEffect (() => {
    const getInventory = async () => {
      try {
          const { data } = await getInventoryById(inventoryId);
          setInventory(data);
      }catch (error){
          console.log(error)
      }
  }
    getInventory();
  }, [ inventoryId ]);


  const userListing = async () => {
    try {
      const { data }= await getUser();
      console.log(data)
      setUsers(data);
    }catch(error){
      console.log(error);
    }
  }

  const deviceListing = async () => {
    try{
      const { data }= await getDeviceBrand();
      console.log(data);
      setBrands(data);
    }catch(error){
      console.log(error);
    }
  }

  const deviceStatusListing = async () => {
    try{
      const { data }= await getDeviceStatus();
      console.log(data);
      setStatus(data);
    }catch(error){
      console.log(error);
    }
  }

  const deviceTypeListing = async () => {
    try{
      const { data }= await getDeviceType();
      console.log(data);
      setType(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    userListing();
  }, []);

  useEffect(() => {
    deviceListing();
  }, []);

  useEffect(() => {
    deviceStatusListing();
  }, []);

  useEffect(() => {
    deviceTypeListing ();
  }, []);

  useEffect (() => {
    setFormValues({
      serialNumber:inventory.serialNumber,
      model: inventory.model,
      description: inventory.description,
      color: inventory.color,
      price: inventory.price,
      purchaseDate: inventory.purchaseDate,
      user: inventory.user,
      brand: inventory.brand,
      deviceType: inventory.deviceType,
      deviceStatus: inventory.deviceStatus
    });
  }, [ inventory ]);;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues ({ ...formValues, [name]:value});  
  }

  const handleOnSubmit = async (e) => {
    const target = e.target.elements
    e.preventDefault();
    const inventorySubmitted = {
      serialNumber, model, description, color, picture, purchaseDate, price,
      user: {
        _id: target.user.value
      },
      brand:{
        _id: target.brand.value
      },
      deviceType: {
        _id: target.deviceType.value
      },
      deviceStatus: {
        _id: target.deviceStatus.value
      }
    }
    console.log(inventorySubmitted);
    try{
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });

      Swal.showLoading();
      const {data} = await editInventory(inventoryId, inventorySubmitted);
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
          <Card.Img variant="top" className='card-img' src={inventory?.picture} />
          <Card.Body>
            <Card.Title>Device:<hr/></Card.Title>
            
              <Form className='deviceForm' onSubmit={(e)=> handleOnSubmit(e)}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasic-update" >
                      <Form.Label>Serial number:</Form.Label>
                      <Form.Control type="text"
                        value={ serialNumber } 
                        name="serialNumber"
                        onChange={ (e)=> handleOnChange(e) }
                        required />
                    </Form.Group>
                    <Form.Group controlId="formFile-update" className="mb-3">
                      <Form.Label>Picture</Form.Label>
                      <Form.Control type="file"
                        value={ picture }
                        name="picture"
                        onChange={ (e)=> handleOnChange(e) } 
                        />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>Brand:</Form.Label>
                      <Form.Select name="brand"  
                        value={brand}
                        onChange={ (e)=> handleOnChange(e) }
                        required>
                        <option>Select brand</option>
                        {
                          brands.map(brand =>{
                            return <option key={brand._id} value={brand._id}> {brand.name} </option>
                          })
                        }
                      </Form.Select>
                    </Form.Group> 
                  </Col>
                </Row>
            
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasic-update">
                      <Form.Label>Model:</Form.Label>
                      <Form.Control type="text"
                        value={ model } 
                        name="model"
                        onChange={ (e)=> handleOnChange(e) }
                        required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic-update">
                      <Form.Label>Date of purchase:</Form.Label>
                      <Form.Control type="date" placeholder="Fecha" 
                        value={ purchaseDate }
                        name="purchaseDate"
                        onChange={ (e)=> handleOnChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>Device type:</Form.Label>
                      <Form.Select 
                        name="deviceType" 
                        value = {deviceType} 
                        onChange={ (e)=> handleOnChange(e) } required>
                        <option>Select device type</option>
                        {
                          type.map(type =>{
                            return <option key={type._id} value={type._id}> {type.name} </option>
                          })
                        }
                      </Form.Select>
                    </Form.Group> 
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasic-update">
                      <Form.Label>Description:</Form.Label>
                      <Form.Control type="text" 
                        value={ description }
                        name="description"
                        onChange={ (e)=> handleOnChange(e) }
                        required />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="formBasic-update">
                      <Form.Label>Price:</Form.Label>
                      <Form.Control type="text" 
                        value={ price } 
                        name="price"
                        onChange={ (e)=> handleOnChange(e) } 
                        required/>
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>Device status:</Form.Label>
                      <Form.Select 
                        name="deviceStatus" 
                        value = {deviceStatus}
                        onChange={ (e)=> handleOnChange(e) } required>
                        <option>Select device status</option>
                        {
                          status.map(status =>{
                            return <option key={status._id} value={status._id}> {status.name} </option>
                          })
                        }
                      </Form.Select>
                    </Form.Group>
                  </Col>        
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasic-update">
                      <Form.Label>Color:</Form.Label>
                      <Form.Control type="text" 
                        value={ color }
                        name="color"
                        onChange={ (e)=> handleOnChange(e) } 
                        required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='formBasic-update'>
                      <Form.Label>User:</Form.Label>
                      <Form.Select 
                        name="user"
                        value={ user }
                        onChange={ (e)=> handleOnChange(e) }
                        required>
                        <option>Select user</option>
                        {
                          users.map(user =>{
                            return <option key={user._id} value={user._id}> {user.name} </option>
                          })
                        }
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
