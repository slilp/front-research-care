import styled from "styled-components";
import { Col } from "react-bootstrap";
import mainBg from "../../asset/images/gift.jpg";

export const PointShow = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 150px;
  /* margin-bottom: 100px; */
`;

export const PointBalance = styled.div`
  position: absolute;
  transform: translate(0, 50%);
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  background-color: white;
  border: 2px solid #fe7f9c;
`;

export const HeaderImage = styled.div`
  height: 150px;
  background-image: url(${mainBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: end;
  box-shadow: inset 0 0 10px #ffffff;
`;

export const HeaderText = styled.p`
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const SubHeaderText = styled.div`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Card = styled.div`
  height: 350px;
  cursor: pointer;
  transition: 0.2s;
  width: 80%;
  margin: auto;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translateY(-2.5%);
    transition: 0.2s;
  }
`;

export const GiftImage = styled.div<{ background?: string }>`
  background-image: ${(props: any) =>
    props.background
      ? `url(
          ${props.background}
        )`
      : `url(
          "https://media-cdn.bnn.in.th/110159/Apple-iPhone-12-Purple-1-square_medium.jpg"
        )`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 200px;
  margin: auto;
`;

export const Tag = styled.div`
  background-color: #e9e7e7;
`;
