import React from "react";
import { Section, LogoBrand, SubSection, SocialIcon } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../../asset/images";
import {
  FaFacebook,
  FaLine,
  FaInstagramSquare,
  FaTelegram,
  FaMobileAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <Section>
        <Container>
          <br></br>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={5} className="text-center">
              <LogoBrand src={Logo} className="mr-2"></LogoBrand>
              <p>The Research Care</p>
            </Col>
            <Col md={2}></Col>
            <Col md={5} className="text-center mt-3 mt-md-0">
              <SocialIcon>
                <FaFacebook className="h2 mr-3"></FaFacebook>
              </SocialIcon>
              <SocialIcon>
                <FaLine className="h2 mr-3"></FaLine>
              </SocialIcon>
              <SocialIcon>
                <FaInstagramSquare className="h2 mr-3"></FaInstagramSquare>
              </SocialIcon>
              <SocialIcon>
                <FaTelegram className="h2 mr-3"></FaTelegram>
              </SocialIcon>
              <br></br>
              <div className="mt-2">
                <FaMobileAlt className="h4 mr-2"></FaMobileAlt>087-123-4567
              </div>
              <br></br>
            </Col>
          </Row>
        </Container>
      </Section>
      <SubSection className="d-flex justify-content-center align-items-center">
        <p>© 2021 Copyright: theresearchcare.com</p>
      </SubSection>
    </>
  );
}

export default Footer;
