import styled from "styled-components";

export const Section = styled.div`
  /* background-color: #fafafa; */
  min-height: 80vh;
`;

export const Card = styled.div`
  border-radius: 5px;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;

export const StatCard = styled.div`
  border-radius: 5px;
  height: 5rem;
`;

export const EditProfileBtn = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  background-color: #9dc767;
  padding: 0.5rem;
  font-size: large;
  width: 50%;
  &:hover {
    background-color: #abcc81;
  }
`;

export const JobPanel = styled.div`
  height: 8.5rem;
  padding: 1rem;
  border: 0.15px solid #d3d5db;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: translateY(-2.5%);
    transition: 0.1s;
    background-color: #fff4f3;
  }
`;

export const JobPanelLock = styled.div`
  height: 8.5rem;
  padding: 1rem;
  border: 0.15px solid #d3d5db;
  border-radius: 15px;
`;

export const JobSection = styled.div`
  min-height: 10vh;
  border-radius: 15px;
`;

export const StatusTag = styled.div<{ bgColor?: string }>`
  border-radius: 15px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#ffdbe9")};
  color: white;
  text-align: center;
  /* border-bottom: 1px solid #d1638f; */
`;
