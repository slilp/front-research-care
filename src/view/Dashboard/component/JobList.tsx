import React from "react";
import { useHistory } from "react-router-dom";
import { JobPanel, JobSection, StatusTag, JobPanelLock } from "../style";
import { Container, Row, Col, Alert } from "react-bootstrap";
import {
  BsBriefcase,
  BsAlarm,
  BsClipboardData,
  BsStopwatch,
} from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

function JobList() {
  const history = useHistory();

  const toResearchInfo = (x: number) => {
    history.push(`/research/${x}`);
  };

  return (
    <Container>
      <h5>
        <BsAlarm className="pr-2 mr-1 h2 text-warning"></BsAlarm>
        งานที่ถึงเวลาประเมิน
      </h5>
      <JobSection>
        <Alert className="text-center mt-1" variant="danger">
          <BsFillXCircleFill className="h5 mr-2"></BsFillXCircleFill>
          <b className="mr-2">RS002</b>
          การประเมินไม่ผ่าน กรุณาอัพโหลดรูปใหม่อีกครั้ง
        </Alert>
        <Row>
          {[1, 2, 3].map((x) => (
            <Col key={x} md={6} lg={4} className="p-1">
              <JobPanel>
                <Row>
                  <Col
                    xs={8}
                    className="text-break"
                    onClick={() => toResearchInfo(x)}
                  >
                    <p className="mb-0">รหัส RS00{x}</p>
                    <p>เซรั่มผิวหน้า</p>
                    <p className="text-muted">
                      <BsStopwatch className="mr-2"></BsStopwatch>ครั้งที่ 2/3
                    </p>
                  </Col>
                  <Col xs={4}>
                    <StatusTag bgColor="#f699cd">รอประเมิน</StatusTag>
                  </Col>
                </Row>
              </JobPanel>
            </Col>
          ))}
        </Row>
      </JobSection>
      <hr className="mt-5 mb-5"></hr>
      <h5>
        <BsBriefcase className="pr-2 mr-1 h2 text-primary"></BsBriefcase>
        งานที่กำลังทำอยู่
      </h5>
      <JobSection>
        <Row>
          {[4, 5].map((x) => (
            <Col key={x} md={6} lg={4} className="p-1">
              <JobPanelLock>
                <Row>
                  <Col xs={8} className="text-break">
                    <p className="mb-0">รหัส RS00{x}</p>
                    <p className="mb-1">เซรั่มผิวหน้า</p>
                    <p className="mb-1">
                      <BsClipboardData className="mr-1"></BsClipboardData>{" "}
                      ครั้งถัดไป 12/07/2565
                    </p>
                    <p className="text-muted">เสร็จเเล้ว 2/3 ครั้ง</p>
                  </Col>
                  <Col xs={4}>
                    <StatusTag bgColor="#007bff">ยังไม่ถึงเวลา</StatusTag>
                  </Col>
                </Row>
              </JobPanelLock>
            </Col>
          ))}
        </Row>
      </JobSection>
      <hr className="mt-5 mb-5"></hr>
      <h5>
        <FaCheckCircle className="pr-2 mr-1 h2 text-success"></FaCheckCircle>
        งานที่ทำสำเร็จเเล้วล่าสุด
      </h5>
      <JobSection>
        <Row>
          {[6, 7].map((x) => (
            <Col key={x} md={6} lg={4} className="p-1">
              <JobPanel>
                <Row>
                  <Col
                    xs={8}
                    className="text-break"
                    onClick={() => toResearchInfo(x)}
                  >
                    <p className="mb-0">รหัส RS00{x}</p>
                    <p>เซรั่มผิวหน้า</p>
                    <p className="text-muted">
                      <BsStopwatch className="mr-2"></BsStopwatch>ครั้งที่ 3/3
                    </p>
                  </Col>
                  <Col xs={4}>
                    <StatusTag className="mb-2" bgColor="#98bf64">
                      สำเร็จ
                    </StatusTag>
                  </Col>
                </Row>
              </JobPanel>
            </Col>
          ))}
        </Row>
      </JobSection>
    </Container>
  );
}

export default JobList;
