import React from "react";
import { Container } from "react-bootstrap";
import { Section } from "./style";
import { Header, Content } from "./component";

function Job() {
  return (
    <>
      <Header></Header>
      <Section>
        <Container className="p-4">
          <br></br>
          <Content></Content>
        </Container>
        <br></br>
      </Section>
    </>
  );
}

export default Job;
