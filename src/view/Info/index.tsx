import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ProfileImage } from "./style";
import { BsPerson } from "react-icons/bs";
import RedeemHistory from "./RedeemHistory";

function Info() {
  return (
    <Container className="pt-3">
      <br></br>
      <h5>
        <BsPerson className="pr-2 h2"></BsPerson>ข้อมูลผู้ใช้งาน
      </h5>
      <Row>
        <Col md={6} className="text-center">
          <ProfileImage src="https://i.pinimg.com/originals/a1/e3/e6/a1e3e618b4f5d9b5b45ab3b41d90a342.jpg"></ProfileImage>
          <h5 className="mt-4">Lisa_blickpink</h5>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-muted">ชื่อจริง</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-muted">นามสกุล</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-muted">เบอร์โทรศัพท์</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-muted">ที่อยู่จัดส่ง</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
              อัพเดทข้อมูล
            </Button>
          </Form>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <RedeemHistory></RedeemHistory>
    </Container>
  );
}

export default Info;
