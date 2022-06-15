import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DeviceCard = (props) => {

    const { inventory } = props;

  return (
    <>
      <Col>
        <Card style={{width:'20rem', height:'50rem'}}>
          <Card.Img style={{margin:'1rem', width:'18rem', height:'18rem'}} variant="top" src={inventory.picture} />
          <Card.Body>
            <Card.Title>Properties:<hr/></Card.Title>
            <Card.Text>
              Serial Number: {inventory.serialNumber}<br/>
              Model: {inventory.model}<br/>
              User: {inventory.user.name}<br/>
              Description: {inventory.description}<br/>
              Color: {inventory.color}<br/>
              Price: {inventory.price}<br/>
              Date of purchase: {inventory.purchaseDate}<br/>
              <Link to={`inventory/edit/${inventory._id}`}> More...</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>      
    </>
  )
}
