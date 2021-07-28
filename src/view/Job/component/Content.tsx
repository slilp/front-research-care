import React, { useState } from "react";
import { Content, RegisterJob } from "../style";
import { Row, Col } from "react-bootstrap";
import { WrapText } from "../../../component";
import {
  BsPersonCheck,
  BsFlag,
  BsPen,
  BsLayers,
  BsInboxes,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import LabDesc from "./LabDesc";
import { useHistory } from "react-router-dom";
import { useAuthSelector } from "../../../state/hooks";

function ContentSection() {
  const history = useHistory();

  const { isAuthenticated } = useAuthSelector();

  const content = `Water, Methyl Trimethicone, Butylene Glycol, Peg-100 Stearate,
            Dimethicone, Cetyl Ricinoleate, Silica, Olea Europaea (Olive) Fruit
            Oil, Glycerin, Behenyl Alcohol, Cucumis Sativus (Cucumber) Fruit
            Extract, Panax Ginseng (Ginseng) Root Extract, Castanea Sativa
            (Chestnut) Seed Extract, Camellia Sinensis (Green Tea) Leaf Extract,
            Cordyceps Sinensis Extract, Magnolia Officinalis Bark Extract, Pyrus
            Malus (Apple) Fruit Extract, Scutellaria Baicalensis Root Extract,
            Pantethine, Panthenol, Caprylic/Capric Triglyceride, Butyrospermum
            Parkii (Shea Butter), Caffeine, Coleus Barbatus Extract, Yeast
            ExtractFaexExtrait De Levure, Folic Acid, Hydrogenated Lecithin,
            Jojoba Wax Peg-120 Esters, Biotin, Tribehenin, Myristyl Alcohol,
            Palmitoyl Tetrapeptide-7, Trehalose, Sodium Hyaluronate, Ascorbyl
            Tocopheryl Maleate, Hesperidin Methyl Chalcone, Sodium Sulfite,
            Sodium Metabisulfite, Steareth-20, Dipeptide-2, Ethylhexylglycerin,
            Carbomer, Tromethamine, Sorbic Acid, Chlorphenesin, Phenoxyethanol,
            Mica, Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491, Ci 77492,
            Ci 77499`;

  const onSubmit = () => {
    if (isAuthenticated) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  };

  return (
    <Content className="p-3 p-md-5">
      <Row>
        <Col md={6}>
          <h5>เซรั่มเวชสำอาง</h5>
        </Col>
        <Col md={6} className="text-md-right text-center">
          <h5>
            <FaStar className="mr-1 text-warning"></FaStar>
            ค่าตอบเเทน
          </h5>
          <h5 className="text-muted">1,700 บาท</h5>
        </Col>
        <Col md={12}>
          <p className="text-muted">
            เซรั่มเวชสำอางคุณภาพที่คิดค้นมาเพื่อสภาพผิวของหญิงชาวไทยโดยเฉพาะ
            ช่วยลดเลือนริ้วรอย รู้สึกได้ตั้งแต่ครั้งแรกที่ใช้
          </p>
        </Col>
        <Col xs={4}>
          <p>
            <BsInboxes className="mr-1"></BsInboxes> ประเภท
          </p>
        </Col>
        <Col xs={8}>
          <span className="text-muted">เซรั่มบำรุงผิวหน้า</span>
        </Col>
        <Col md={4}>
          <p>
            <BsLayers className="mr-1"></BsLayers> ส่วนประกอบหลัก
          </p>
        </Col>
        <Col md={8}>
          <p className="text-muted">
            <WrapText word={content} limit={80}></WrapText>
          </p>
        </Col>
        <Col md={4}>
          <p>*** ข้อมูลสำหรับอาการแพ้</p>
        </Col>
        <Col md={8}>
          <span className="text-muted">ถ้าเเพ้รุนเเรงให้ไปหาหมอ</span>
        </Col>
      </Row>
      <hr></hr>
      <h5>รายละเอียดงาน</h5>
      <br></br>
      <p>
        <BsPen className="mr-1"></BsPen>รายละเอียดการทดลอง
      </p>
      <LabDesc></LabDesc>
      <br></br>
      <Row>
        <Col md={6}>
          <p>
            <BsPersonCheck className="mr-1"></BsPersonCheck>{" "}
            คุณสมบัติผู้เข้าร่วมโครงการ
          </p>
          <ul className="text-muted">
            <li>เพศ : หญิงเท่านั้น</li>
            <li>อายุ : 40 – 50 ปี</li>
            <li>สภาพผิวหน้า : ทุกสภาพผิว</li>
          </ul>
        </Col>
        <Col md={6}>
          <p>
            <BsFlag className="mr-1"></BsFlag>
            จำนวนผู้เข้าร่วมโครงการที่ต้องการ
          </p>
          <p className="text-muted ml-5">50 คน</p>
        </Col>
        <Col md={12} className="d-flex justify-content-center">
          <RegisterJob className="mt-4 mb-4" onClick={onSubmit}>
            สมัครเข้าร่วมโครงการ
          </RegisterJob>
        </Col>
      </Row>
    </Content>
  );
}

export default ContentSection;
