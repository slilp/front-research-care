import styled from "styled-components";
import { DARK_PINK, DARK_PINK_HOVER } from "../../style/constant";

export const LoginButton = styled.button`
  border-radius: 15px;
  padding: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${DARK_PINK};
  color: white;
  border: none;
  &:hover {
    background-color: ${DARK_PINK_HOVER};
  }
`;

export const LogoBrand = styled.img`
  height: 80px;
  width: 80px;
`;

export const LogoText = styled.span`
  color: ${DARK_PINK};
`;
