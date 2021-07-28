import styled from "styled-components";
import { Container } from "react-bootstrap";
import { DARK_PINK, DARK_PINK_HOVER, BLUE, BROWN } from "../../style/constant";

export const Section = styled(Container)`
  height: 80vh;
`;

export const CardLogin = styled.div`
  width: 40%;
  border-radius: 15px;
  border-bottom: 15px solid ${BLUE};

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`;

export const MassagePhoto = styled.img`
  height: 8rem;
  @media (max-width: 768px) {
    height: 5rem;
  }
`;

export const LoginButton = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  background-color: ${DARK_PINK};
  padding: 0.5rem;
  font-size: large;
  width: 100%;
  &:hover {
    background-color: ${DARK_PINK_HOVER};
  }
`;

export const FacebookButton = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  background-color: #3b5998;
  padding: 0.5rem;
  font-size: large;
  width: 100%;
  &:hover {
    background-color: #4f69a0;
  }
`;

export const RegisterButton = styled.span`
  color: #f3a010;
  cursor: pointer;
  &:hover {
    color: #f3af39;
    border-bottom: 2px solid #f3af39;
  }
`;
