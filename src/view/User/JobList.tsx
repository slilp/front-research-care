import React from "react";
import { JobPanel, JobSection, StatusTag } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsBriefcase,
  BsAlarm,
  BsClipboardData,
  BsStopwatch,
} from "react-icons/bs";

function JobList() {
  return (
    <Container>
      <h5>
        <BsAlarm className="pr-2 mr-1 h2 text-warning"></BsAlarm>
        งานที่ถึงเวลาประเมิน
      </h5>
      <JobSection>
        <Row>
          {[1, 2, 3].map((x) => (
            <Col md={6} lg={4} className="p-1">
              <JobPanel>
                <Row>
                  <Col xs={8} className="text-break">
                    <p>เซรั่มผิวหน้า</p>
                    <p className="text-muted">
                      <BsStopwatch className="mr-2"></BsStopwatch>ครั้งที่ 2/3
                    </p>
                  </Col>
                  <Col xs={4}>
                    <StatusTag>รอประเมิน</StatusTag>
                  </Col>
                </Row>
              </JobPanel>
            </Col>
          ))}
        </Row>
      </JobSection>
      <hr className="mt-5 mb-5"></hr>
      <h5>
        <BsBriefcase className="pr-2 mr-1 h2"></BsBriefcase>
        งานที่กำลังทำอยู่
      </h5>
      <JobSection>
        <Row>
          {[1, 2].map((x) => (
            <Col md={6} lg={4} className="p-1">
              <JobPanel>
                <Row>
                  <Col xs={8} className="text-break">
                    <p className="mb-1">เซรั่มผิวหน้า</p>
                    <p className="mb-1">
                      <BsClipboardData className="mr-1"></BsClipboardData>{" "}
                      ครั้งถัดไป 12/07/2565
                    </p>
                    <p className="text-muted">เสร็จเเล้ว 2/3 ครั้ง</p>
                  </Col>
                  <Col xs={4}>
                    <StatusTag>ยังไม่ถึงเวลา</StatusTag>
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
