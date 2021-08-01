import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { Ipad } from "../../asset/images/index";
import { BROWN } from "../../style/constant";

export const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

export const Section = styled(Container)`
  min-height: 80vh;
`;

export const GiftImage = styled.div`
  min-height: 100px;
  min-width: 100px;
  background-image: ${`url(${Ipad})`};
  background-repeat: no-repeat;
  border: 1px solid #a9adaf;
  background-size: contain;
  background-position: center;
`;

export const GiftCard = styled(Col)`
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GiftTagStatus = styled.div<{ color?: string }>`
  background-color: ${(props) => (props.color ? props.color : `${BROWN}`)};
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
`;
