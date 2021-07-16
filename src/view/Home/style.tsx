import styled from "styled-components";
import { Col } from "react-bootstrap";
import mainBg from "../../asset/images/main-bg.jpg";
import mainLgBg from "../../asset/images/main-bg-lg.jpg";

export const SearchTap = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  transform: translate(0, 80%);
`;

export const SearchBox = styled(Col)`
  background-color: white;
  border-radius: 15px;
`;

export const HeaderImage = styled.div`
  height: 25rem;
  background-image: url(${mainBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: end;
  box-shadow: inset 0 0 10px #ffffff;

  @media (max-width: 768px) {
    height: 20rem;
  }

  @media (max-width: 576px) {
    height: 27rem;
  }
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

export const MassagePhoto = styled.img`
  height: 8rem;
  @media (max-width: 768px) {
    height: 5rem;
  }
`;

export const TextSeeAll = styled.div`
  cursor: pointer;
  color: gray;
  &:hover {
    color: black;
  }
`;

export const Divider = styled.div`
  height: 13rem;

  @media (max-width: 576px) {
    height: 17rem;
  }
`;