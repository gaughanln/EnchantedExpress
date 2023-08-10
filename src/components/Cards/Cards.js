import React from "react";
import Card from "react-bootstrap/Card";
import train from "../../assets/Enchanted.png";
import Stack from 'react-bootstrap/Stack';
import train1 from '../../assets/sampleTrain1.png';
import train2 from '../../assets/sampleTrain2.webp';
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
   
    <div className ="container ">
    <Stack direction="horizontal" gap={3}>
      {cardInfo.map((card, index) => (
        <Card key={index} style={{ width: "18rem" }} className={`card-${card.color}`}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title className="card-text">{card.text}</Card.Title>
            <p> We can add more text here if we want</p>
          </Card.Body>
        </Card>
      ))}
      </Stack>
      </div>
      
    </>
  );
}

export default Cards;
