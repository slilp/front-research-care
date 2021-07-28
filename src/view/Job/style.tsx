import styled from "styled-components";
import { JobExample } from "../../asset/images";
import { DARK_PINK, DARK_PINK_HOVER, LIGHT_BROWN } from "../../style/constant";

export const Section = styled.div`
  background-color: #fafafa;
`;

export const HeaderSection = styled.div`
  background-color: ${LIGHT_BROWN};
`;

export const Content = styled.div`
  border-radius: 15px;
  background-color: white;
`;

export const LabDescSection = styled.div`
  padding: 1rem;
  background-color: rgb(238, 243, 247);
  border-radius: 10px;
`;

export const RegisterJob = styled.button`
  padding: 1rem;
  background-color: ${DARK_PINK};
  color: white;
  border-radius: 15px;
  border: none;
  &:hover {
    background-color: ${DARK_PINK_HOVER};
  }
`;

export const ProductImageBox = styled.div`
  height: 300px;
  width: 100%;
  background-image: ${`url(${JobExample})`};
  background-repeat: no-repeat;
  border-radius: 15px;
  background-size: 100%;
  border: none;
  background-position: center;
  margin-right: 0px;
`;
