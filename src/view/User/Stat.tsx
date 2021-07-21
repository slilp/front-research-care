import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StatCard } from "./style";
import { BsBriefcase, BsHeart, BsXCircle, BsPerson } from "react-icons/bs";

function Stat() {
  return (
    <Container>
      <h5>
        <BsPerson className="pr-2 h2"></BsPerson>Dashboard
      </h5>
      <Row>
        <Col md={6} lg={4}>
          <StatCard
            // bgColor="#77df79"
            className="shadow d-flex align-items-center m-2"
          >
            <Row className="text-center d-flex align-items-center w-100">
              <Col className="bg-success rounded text-white">
                <h2>
                  <BsHeart></BsHeart>
                </h2>
              </Col>
              <Col>
                <h6>สำเร็จ</h6>
              </Col>
              <Col>
                <h6>5 งาน</h6>
              </Col>
            </Row>
          </StatCard>
        </Col>
        <Col md={6} lg={4}>
          <StatCard
            // bgColor="#799fc8"
            className="shadow d-flex align-items-center m-2"
          >
            <Row className="text-center d-flex align-items-center w-100">
              <Col className="bg-primary rounded text-white">
                <h2>
                  <BsBriefcase></BsBriefcase>
                </h2>
              </Col>
              <Col>
                <h6>ทำอยู่</h6>
              </Col>
              <Col>
                <h6>5 งาน</h6>
              </Col>
            </Row>
          </StatCard>
        </Col>
        <Col md={6} lg={4}>
          <StatCard
            // bgColor="#ff9997"
            className="shadow d-flex align-items-center m-2"
          >
            <Row className="text-center d-flex align-items-center w-100">
              <Col className="bg-danger rounded text-white">
                <h2>
                  <BsXCircle></BsXCircle>
                </h2>
              </Col>
              <Col>
                <h6>ยกเลิก</h6>
              </Col>
              <Col>
                <h6>5 งาน</h6>
              </Col>
            </Row>
          </StatCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Stat;
