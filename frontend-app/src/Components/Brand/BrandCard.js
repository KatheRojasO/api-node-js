import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const BrandCard = (props) => {

    const { brand } = props;

  return (
    <>
      <Col>
        <Card>
          <Card.Header>Brands:</Card.Header>
          <Card.Body>
            <Card.Title>{brand.name}</Card.Title>
            <Card.Text>
              {brand.status}
            </Card.Text>
            <Link to={`deviceBrand/edit/${brand._id}`}> Edit</Link>
          </Card.Body>
        </Card>
      </Col>      
    </>
  )
}