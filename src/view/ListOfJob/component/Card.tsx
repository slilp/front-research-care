import React from "react";
import { useHistory } from "react-router-dom";
import { JobCard, JobCardHead, JobCardContent, JobCardTitle } from "../style";
import { FaStar, FaGift } from "react-icons/fa";

const shortDesc = (word: string): string => {
  let result = "";
  word.length > 80 ? (result = word.substring(0, 80) + "...") : (result = word);
  return result;
};

interface CardProp {
  image: string;
  title: string;
  desc: string;
  salary: number;
  point: number;
  period: number;
}

function Card({ image, title, desc, salary, point, period }: CardProp) {
  const history = useHistory();
  const selectJob = () => {
    history.push("/job");
  };

  return (
    <JobCard className="shadow" onClick={selectJob}>
      <JobCardHead background={image}></JobCardHead>
      <JobCardTitle className="pl-3 pr-3 mt-3">{title}</JobCardTitle>
      <JobCardContent className="pl-3 pr-3">{shortDesc(desc)}</JobCardContent>
      <div className="pl-3 pr-3">
        <FaStar className="text-warning mr-2"></FaStar>ค่าตอบแทน : {salary} บาท
      </div>
      <div className="pl-3 pr-3">
        <FaGift className="text-warning mr-2"></FaGift>คะเเนน : {point} คะเเนน
      </div>
      <hr></hr>
      <p className="pl-3 pr-3 text-secondary">ระยะเวลา : {period} สัปดาห์</p>
    </JobCard>
  );
}

export default Card;
