import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { setAuthUserOne, setAuthUserTwo } from "../../state/auth";
import { useAuth } from "../../state/hooks";
import { fetchRandomUser } from "../../state/actions";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const toRegisterPage = () => {
    history.push("/register");
  };

  const data = useAuth();

  const changeUserOne = () => {
    dispatch(setAuthUserOne());
  };

  const changeUserTwo = () => {
    dispatch(setAuthUserTwo());
  };

  const changeWhat = () => {
    dispatch(fetchRandomUser());
  };

  return (
    <Section className="d-flex flex-column align-items-center pt-5">
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
          <Form.Group className="mb-1">
            <Form.Label>รหัสผ่าน</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <p className="text-muted text-right mb-3">ลืมรหัสผ่าน ?</p>
          <LoginButton type="button">เข้าสู่ระบบ</LoginButton>
          <hr className="w-75 mt-4"></hr>
          <p className="mb-2 text-center text-muted">หรือเข้าสู่ระบบด้วย</p>
          <br></br>
          <FacebookButton
            type="button"
            className="d-flex align-items-center justify-content-center"
          >
            <FaFacebook className="mr-2"></FaFacebook>เข้าสู่ระบบด้วย Facebook
          </FacebookButton>
        </Form>
        <p className="text-center mt-3 mb-5">
          ยังไม่ได้ลงทะเบียน ?
          <RegisterButton className="h5 ml-2" onClick={toRegisterPage}>
            สมัครสมาชิก
          </RegisterButton>
        </p>
      </CardLogin>
    </Section>
  );
}

export default Login;
