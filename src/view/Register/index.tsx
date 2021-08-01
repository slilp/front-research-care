import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import {
  Section,
  CardLogin,
  MassagePhoto,
  LoginButton,
  FacebookButton,
  RegisterButton,
} from "./style";
import IconMassage from "../../asset/images/facial-massage.png";
import { FaFacebook } from "react-icons/fa";

function Register() {
  const history = useHistory();
  const toLoginPage = () => {
    history.push("/login");
  };

  return (
    <Section className="d-flex flex-column align-items-center pt-5 mb-5">
      <MassagePhoto src={IconMassage}></MassagePhoto>
      <br></br>
      <h3>เข้าสู่ระบบ</h3>
      <br></br>
      <CardLogin className="shadow">
        <br></br>
        <Form className="p-4">
          <Form.Group className="mb-4">
            <Form.Label>ชื่อผู้ใช้งาน</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>รหัสผ่าน</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>เบอร์โทร</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <LoginButton type="button">สมัครสมาชิก</LoginButton>
          <hr className="w-75 mt-4"></hr>
          <p className="mb-2 text-center text-muted">หรือสมัครสมาชิกด้วย</p>
          <br></br>
          <FacebookButton className="d-flex align-items-center justify-content-center">
            <FaFacebook className="mr-2"></FaFacebook>สมัครสมาชิกด้วย Facebook
          </FacebookButton>
        </Form>
        <p className="text-center mt-3 mb-5">
          เป็นสมาชิกอยู่เเล้ว ?
          <RegisterButton className="h5 ml-2" onClick={toLoginPage}>
            เข้าสู่ระบบ
          </RegisterButton>
        </p>
      </CardLogin>
    </Section>
  );
}

export default Register;
