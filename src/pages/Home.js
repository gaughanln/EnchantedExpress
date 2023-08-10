import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import trainLogo from "../assets/Enchanted.png";
import Cards from "../components/Cards/Cards";

// TODO
// I WANT THE LOGO AND TEXT TO THE IN THE SAME ROW, and on the right
// FIGURE OUT A SIZE FOR PHOTOS FOR THE CARDS
// only want them to size down at certain times, not as the whole screen moves
// center texts

function Home() {
  return (
    <>
      <div className="container fluid ">
        <img src={trainLogo} className="homeLogo" />
      </div>
      <br/>
      <div className="container fluid top-section">
        <Row>
          <p ClassName="text-center">
            Enchanted Express is one of the top Train rentals in Houston Texas.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,{" "}
          </p>
        </Row>
      </div>

      <div className="container fluid middle-section">
        <Cards />
      </div>

      <br/>

      <div className="container fluid bottom-section">
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
}

export default Home;
