import styled from "styled-components";
import { DARK, BLUE } from "../../style/constant";

export const Section = styled.div`
  min-height: 100px;
  background-color: ${DARK};
  color: white;
`;

export const SubSection = styled.div`
  min-height: 50px;
  background-color: ${BLUE};
  color: white;
`;

export const LogoBrand = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const SocialIcon = styled.span`
  cursor: pointer;
  &:hover {
    color: #bebaba;
  }
`;
