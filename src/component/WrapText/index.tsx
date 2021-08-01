import { useState } from "react";
import styled from "styled-components";

const ExtendButton = styled.button`
  border: none;
  background-color: white;
  color: gray;
  &:hover {
    color: black;
  }
`;

const cutString = (word: string, limit: number): string => {
  let result = "";
  word.length > limit
    ? (result = word.substring(0, limit) + " ...")
    : (result = word);
  return result;
};

interface WrapTextProps {
  word: string;
  limit: number;
}

function WrapText({ word, limit }: WrapTextProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      {word.length < limit || open ? word : cutString(word, limit)}
      {word.length > limit && open ? (
        <ExtendButton onClick={() => setOpen(false)}> ย่อข้อความ</ExtendButton>
      ) : (
        <ExtendButton onClick={() => setOpen(true)}> ดูทั้งหมด</ExtendButton>
      )}
    </div>
  );
}

export default WrapText;
