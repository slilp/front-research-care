import styled from "styled-components";
import { ResearchExample } from "../../asset/images";

export const ResearchCard = styled.div`
  min-height: 300px;
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
