import styled from "styled-components";
import { ResearchExample } from "../../asset/images";
import { GREY } from "../../style/constant";

export const ResearchCard = styled.div`
  min-height: 325px;
`;

export const ImageUpload = styled.div<{ background?: string }>`
  background-image: ${(props: any) =>
    props.background
      ? `url(
          ${props.background}
        )`
      : `url(
          ${ResearchExample}
        )`};
  height: 200px;
  width: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

export const SeeDetailBtn = styled.button`
  background-color: white;
  border-radius: 15px;
`;

export const ImageBox = styled.div`
  /* height: 9rem;
  flex: 1; */
  border-radius: 15px;
  text-align: center;
  position: relative;
`;

export const Image = styled.img`
  height: 9rem;
  border-radius: 15px;
  cursor: pointer;
`;

export const DeleteImg = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  cursor: pointer;
  background-color: salmon;
  color: white;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${GREY};
  border: 0px;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  color: white;
  &:hover {
    opacity: 0.7;
  }
`;

export const Section = styled.div`
  height: 10rem;
`;
