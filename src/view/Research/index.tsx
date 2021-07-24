import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { BsBriefcase, BsHeart, BsXCircle, BsPerson } from "react-icons/bs";
import { FaCheckCircle, FaLock, FaBell } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import Zoom from "react-medium-image-zoom";
import { ResearchCard, ImageUpload } from "./style";
import { useParams } from "react-router-dom";

function Research() {
  let { id } = useParams<{ id?: string }>();

  //   const [images, setImages] = useState<string>([]);

  //   const handleAdd = (e: any) => {
  //     if (e.target.files.length) {
  //       setImages([
  //         ...images,
  //         {
  //           path: URL.createObjectURL(e.target.files[0]),
  //           // raw: e.target.files[0],
  //         },
  //       ]);
  //     }
  //   };

  //   const handleDelete = (index: number) => {
  //     setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  //   };

  return (
    <Container className="pt-3">
      <br></br>
      <h5>
        <BsBriefcase className="pr-2 h2"></BsBriefcase>อัพโหลดงานของคุณ
      </h5>
      <Alert className="text-center" variant="primary">
        <h5>** คุณมีกำหนดต้องทำการประเมิน</h5>
        <h5 className="font-weight-bold">ครั้งที่ 3 หมดเขตวันที่ 30/12/2021</h5>
      </Alert>
      {id === "2" && (
        <Alert className="text-center" variant="danger">
          <h5>
            <BsFillXCircleFill className="mr-2"></BsFillXCircleFill>{" "}
            การประเมินครั้งที่ 3 ไม่ผ่านรูปของคุณมีตำหนิ
            กรุณาอัพโหลดรูปใหม่อีกครั้ง
          </h5>
        </Alert>
      )}

      <br></br>
      <ResearchCard className="shadow-sm mt-3 p-3">
        <Row>
          <Col xs={6}>
            <h5>
              <FaCheckCircle className="pr-2 h2 text-success"></FaCheckCircle>
              ครั้งที่ 1
            </h5>
            <p>
              <span className="h6 text-muted">(สำเร็จเเล้ว)</span>
            </p>
          </Col>
          <Col className="text-right" xs={6}>
            <h5>25/07/2021</h5>
            <p>
              <span className="h6 text-muted">อัพเดท 26/07/2021</span>
            </p>
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <ImageUpload></ImageUpload>
          </Col>
        </Row>
      </ResearchCard>
      <ResearchCard className="shadow-sm mt-3 p-3">
        <Row>
          <Col xs={6}>
            <h5>
              <FaCheckCircle className="pr-2 h2 text-success"></FaCheckCircle>
              ครั้งที่ 2
            </h5>
            <p>
              <span className="h6 text-muted">(สำเร็จเเล้ว)</span>
            </p>
          </Col>
          <Col className="text-right" xs={6}>
            <h5>25/07/2021</h5>
            <p>
              <span className="h6 text-muted">อัพเดท 26/07/2021</span>
            </p>
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <ImageUpload></ImageUpload>
          </Col>
        </Row>
      </ResearchCard>
      <ResearchCard className="shadow-sm mt-3 p-3">
        <Row>
          <Col>
            <h5>
              <BsBriefcase className="pr-2 h2 text-primary"></BsBriefcase>
              ครั้งที่ 3
            </h5>
            <p>
              <span className="h6 text-muted">(รอการประเมิน)</span>
            </p>
          </Col>
          <Col className="text-right">
            <h5>25/07/2021</h5>
            {/* <p>
              <span className="h6 text-muted">อัพเดท 26/07/2021</span>
            </p> */}
          </Col>
        </Row>
      </ResearchCard>
      <ResearchCard className="shadow-sm mt-3 p-3">
        <Row>
          <Col>
            <h5>
              <FaLock className="pr-2 h2 text-muted"></FaLock>
              ครั้งที่ 4
            </h5>
            <p>
              <span className="h6 text-muted">(ยังไม่ถึงเวลา)</span>
            </p>
          </Col>
          <Col className="text-right">
            <h5>26/12/2021</h5>
            <p>
              <span className="h6 text-danger">หมดเขต 30/12/2021</span>
            </p>
          </Col>
        </Row>
      </ResearchCard>
    </Container>
  );
}

export default Research;
