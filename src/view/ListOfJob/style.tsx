import styled from "styled-components";
import { Col } from "react-bootstrap";
import { JobExample } from "../../asset/images";

export const JobCardSection = styled(Col)`
  padding: 1rem;
  max-height: 27rem;
  min-height: 27rem;
  display: flex;
  justify-content: center;
`;

export const JobCard = styled.div`
  height: 100%;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  @media (max-width: 768px) {
    width: 85%;
  }

  &:hover {
    transform: translateY(-2.5%);
    transition: 0.3s;
  }
`;

export const JobCardHead = styled.div<{ background: string }>`
  background-image: ${(props: any) =>
    props.background
      ? `url(
          ${JobExample}
        )`
      : `url(
          "https://image.freepik.com/free-photo/layout-cosmetic-makeup-beauty-products_23-2148113429.jpg"
        )`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 8rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const JobCardContent = styled.div`
  height: 6rem;
`;
export const JobCardSubContent = styled.div``;
