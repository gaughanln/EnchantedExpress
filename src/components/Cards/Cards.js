import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Stack from 'react-bootstrap/Stack';
import train1 from '../../assets/sampleTrain1.png';
import train3 from '../../assets/sampleTrain3.jpeg';
import train4 from '../../assets/sampleTrain4.jpeg';

import './cards.css';

// add a description tag to the cardInfo Const


function Cards() {
  const cardInfo = [
    {
      image: train1,
      text: "Dress it up for Christmas",
      color: "red",
    },
    {
      image: train4,
      text: "Perfect for Birthday Parties",
      color: "blue",
    },
    {
      image: train3,
      text: "A Fall Festival Favorite",
      color: "yellow",
    },
    {
      image: train4,
      text: "I need another reason for a train",
      color: "red",
    },
  ];

  return (
    <>
   
    <Container>
      <Row>
      {cardInfo.map((card, index) => (
        <Col key={index} sm={6} lg={3}>
        <Card className={`card-${card.color}`}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title className="card-text">{card.text}</Card.Title>
            <p> We can add more text here if we want</p>
          </Card.Body>
        </Card>
      </Col>
      ))}
      </Row>
      </Container>
      
    </>
  );
}

export default Cards;
