import React from "react";
import { Container } from "react-bootstrap";
import { Section } from "./style";
import HeaderSection from "./Header";
import Content from "./Content";

function Job() {
  return (
    <>
      <HeaderSection></HeaderSection>
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
