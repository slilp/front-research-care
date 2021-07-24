import styled from "styled-components";

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
          "https://www.wom-ent.com/wp-content/uploads/2020/06/PZnhTOtr5D3rd9ocLQ7l68Br9a6kVkl4ymXfojryecuWknC-01-819x1024.jpeg"
        )`};
  height: 200px;
  width: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
