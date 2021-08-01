import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { BsBriefcase } from "react-icons/bs";
import {
  FaCheckCircle,
  FaLock,
  FaRegClipboard,
  FaRegSmileBeam,
  FaLine,
  FaMobileAlt,
} from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import {
  ResearchCard,
  ImageUpload,
  SeeDetailBtn,
  Button,
  Section,
  ImageBox,
  DeleteImg,
} from "./style";
import { useParams } from "react-router-dom";
import { GoPlus, GoX } from "react-icons/go";

interface AddImageProps {
  initImages?: ImageInfo[];
}
export interface ImageInfo {
  path?: string;
  pid?: number;
}

function Research({ initImages = [] }: AddImageProps) {
  let { id } = useParams<{ id?: string }>();
  const [images, setImages] = useState<ImageInfo[]>(initImages);
  const uploadImgRef = useRef<any>(null);

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImages([
        ...images,
        {
          path: URL.createObjectURL(e.target.files[0]),
          // raw: e.target.files[0],
        },
      ]);
    }
  };

  const handleDelete = (index: number) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  const history = useHistory();

  const toJobInfo = () => {
    history.push(`/job`);
  };

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
    <Container className="pt-3 mb-5">
      <br></br>
      <Row className="mb-3">
        <Col>
          <h5>
            <BsBriefcase className="pr-2 h2"></BsBriefcase>อัพโหลดงาน
          </h5>
        </Col>
        <Col className="d-flex justify-content-end" onClick={toJobInfo}>
          <SeeDetailBtn>
            <FaRegClipboard className="pr-2 h4"></FaRegClipboard> รายละเอียดงาน
          </SeeDetailBtn>
        </Col>
      </Row>
      {id === "6" || id === "7" ? (
        <Alert className="text-center" variant="success">
          <h5>
            <FaRegSmileBeam className="mr-2 h5"></FaRegSmileBeam>
            ขอขอบพระคุณที่ร่วมงานกับเรา
          </h5>
          <h5 className="font-weight-bold">ค่าตอบเเทน 1,700 บาท</h5>
          <h5>กำหนดการจ่ายค่าตอบเเทน วันที่ : 12/12/2564</h5>
          <br></br>
          <h6>สอบถามข้อมูลเพิ่มเติมได้ที่</h6>
          <h6>
            <FaLine className="h4"></FaLine> @theresearchcare
            <FaMobileAlt className="h4 ml-2"></FaMobileAlt> 087-123-4567
          </h6>
        </Alert>
      ) : (
        <Alert className="text-center" variant="primary">
          <h5>** คุณมีกำหนดต้องทำการประเมิน</h5>
          <h5 className="font-weight-bold">
            ครั้งที่ 3 หมดเขตวันที่ 30/12/2021
          </h5>
        </Alert>
      )}

      {id === "2" && (
        <Alert className="text-center" variant="danger">
          <h6>
            <BsFillXCircleFill className="mr-2"></BsFillXCircleFill>{" "}
            การประเมินครั้งที่ 3 ไม่ผ่านรูปของคุณมีตำหนิ
            กรุณาอัพโหลดรูปใหม่อีกครั้ง
          </h6>
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
      {id === "6" || id === "7" ? (
        <>
          <ResearchCard className="shadow-sm mt-3 p-3">
            <Row>
              <Col xs={6}>
                <h5>
                  <FaCheckCircle className="pr-2 h2 text-success"></FaCheckCircle>
                  ครั้งที่ 3
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
                  ครั้งที่ 4
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
        </>
      ) : (
        <>
          <ResearchCard className="shadow-sm mt-3 p-3">
            <Row>
              <Col xs={6}>
                <h5>
                  <BsBriefcase className="pr-2 h2 text-primary"></BsBriefcase>
                  ครั้งที่ 3
                </h5>
                <p>
                  <span className="h6 text-muted">(รอการประเมิน)</span>
                </p>
              </Col>
              <Col className="text-right" xs={6}>
                <h5>25/07/2021</h5>
              </Col>
              <Col
                xs={12}
                className="d-flex justify-content-center align-items-start"
              >
                {images.length === 0
                  ? null
                  : images.map((image, index) => (
                      <ImageBox>
                        <ImageUpload background={`${image.path}`}></ImageUpload>
                        <DeleteImg onClick={() => handleDelete(index)}>
                          <GoX></GoX>
                        </DeleteImg>
                      </ImageBox>
                    ))}
                {images.length < 1 && (
                  <Section className="d-flex justify-content-center align-items-center">
                    <Button onClick={() => uploadImgRef.current.click()}>
                      <h1 className="text-center">
                        <GoPlus></GoPlus>
                      </h1>
                    </Button>
                    <input
                      type="file"
                      ref={uploadImgRef}
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                  </Section>
                )}{" "}
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
        </>
      )}
    </Container>
  );
}

export default Research;
