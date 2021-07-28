import React from "react";
import { LabDescSection } from "../style";
import { Row, Col } from "react-bootstrap";

function LabDesc() {
  return (
    <LabDescSection>
      <Row>
        <Col md={4}>
          <p>ลักษณะการเก็บข้อมูล</p>
          <p className="text-muted">
            ส่งรูปผิวหน้าหลังใช้ผลิตภัณฑ์ และตอบแบบสอบถาม
          </p>
        </Col>
        <Col md={4}>
          <p>จำนวนครั้งในการเก็บข้อมูล</p>
          <p className="text-muted">4 ครั้ง</p>
        </Col>
        <Col md={4}>
          <p>ระยะเวลาในการเก็บข้อมูล</p>
          <p className="text-muted">1 เดือน</p>
        </Col>
      </Row>
    </LabDescSection>
  );
}

export default LabDesc;
