import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import train from "../assets/Enchanted.png";

function Cards() {
  const cardInfo = [
    {
      image: train,
      text: "this is a description",
    },
    {
      image: train,
      text: "this is a description",
    },
    {
      image: train,
      text: "this is a description",
    },
    {
      image: train,
      text: "this is a description",
    },
  ];

  return (
    <>
    <div ClassName ="container">
      {cardInfo.map((train) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={train.image} />
          <Card.Body>
            <Card.Title>{train.text}</Card.Title>
          </Card.Body>
        </Card>
      ))}
      </div>
    </>
  );
}

export default Cards;
