import React from "react";
import { Container } from "react-bootstrap";
import { Header, Point, Gift } from "./component";
import { BiTrophy } from "react-icons/bi";

function Redeem() {
  return (
    <>
      <div className="position-relative">
        <Header></Header>
        <Point></Point>
      </div>
      <br></br>
      <br></br>
      <Container className="pt-5">
        <h5>
          <BiTrophy className="h3 mr-2"></BiTrophy>
          เเลกของสมนาคุณ
        </h5>
        <Gift></Gift>
      </Container>
    </>
  );
}

export default Redeem;
