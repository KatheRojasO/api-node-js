import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const UserCard = (props) => {

    const { users } = props;


  return (
    <>
      <Col>
        <Card>
          <Card.Header>User:</Card.Header>
          <Card.Body>
            <Card.Title>{users.name}</Card.Title>
            <Card.Text>
              {users.email}
            </Card.Text>
            <Card.Text>
              {users.status}
            </Card.Text>
            <Link to={`user/edit/${users._id}`}> Edit</Link>
          </Card.Body>
        </Card>
      </Col>      
    </>
  )
}