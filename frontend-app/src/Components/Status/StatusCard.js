import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const StatusCard = (props) => {

    const { status } = props;

  return (
    <>
      <Col>
        <Card>
          <Card.Header>Status:</Card.Header>
          <Card.Body>
            <Card.Title>{status.name}</Card.Title>
            <Card.Text>
              {status.status}
            </Card.Text>
            <Link to={`deviceStatus/edit/${status._id}`}> Edit</Link>
          </Card.Body>
        </Card>
      </Col>      
    </>
  )
}
