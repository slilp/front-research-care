import React from "react";
import { HeaderImage, HeaderText, SubHeaderText, MassagePhoto } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import IconMassage from "../../asset/images/facial-massage.png";
import IconSerum from "../../asset/images/serum.png";
import IconIrritation from "../../asset/images/irritation.png";

function Header() {
  return (
    <HeaderImage>
      <Container>
        <Row>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center mb-3 mb-md-0"
          >
            <MassagePhoto src={IconIrritation}></MassagePhoto>
            <MassagePhoto src={IconSerum}></MassagePhoto>
            <MassagePhoto src={IconMassage}></MassagePhoto>
          </Col>
          <Col md={8}>
            <HeaderText className="text-center">
              มารวมเป็นอาสาทดลองเครื่องสำอางกับเรากันเถอะ
            </HeaderText>
            <div className="d-flex align-items-center flex-column h5">
              <SubHeaderText>
                <p>✔️ ไม่ต้องออกจากบ้าน</p>
                <p>✔️ เพียงมีมือถือหรือคอมพิวเตอร์ก็ทำได้เลย</p>
                <p>✔️ รับประกันจ่ายจริง</p>
              </SubHeaderText>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderImage>
  );
}

export default Header;
