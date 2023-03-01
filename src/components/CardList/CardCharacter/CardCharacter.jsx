import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.scss"


const CardCharacter = ({item, i}) => {
    return (

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Status: {item.status}</ListGroupItem>
    <ListGroupItem>gender: {item.gender}</ListGroupItem>
    <ListGroupItem>species: {item.species}</ListGroupItem>
  </ListGroup>
</Card>
  );
}

export default CardCharacter;