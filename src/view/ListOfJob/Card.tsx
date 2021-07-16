import React from "react";
import { useHistory } from "react-router-dom";
import {
  JobCard,
  JobCardHead,
  JobCardContent,
  JobCardSubContent,
} from "./style";
import { FaStar } from "react-icons/fa";

const shortDesc = (word: string): string => {
  let result = "";
  word.length > 80 ? (result = word.substring(0, 80) + "...") : (result = word);
  return result;
};

function Card() {
  const history = useHistory();
  const selectJob = () => {
    history.push("/job");
  };

  return (
    <JobCard className="shadow" onClick={selectJob}>
      <JobCardHead background="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmb46QLRqqoTv6MRAlvCKqeb1J3QnqV7Tjg&usqp=CAU"></JobCardHead>
      <p className="text-success pl-3 pr-3 mt-3">ครีมบำรุง</p>
      <JobCardContent className="pl-3 pr-3">
        {shortDesc(
          `สารสกัดจากธรรมชาติ ด้วยคุณค่าจากสาหร่ายทะเลน้ำลึก ช่วยให้ผิวชุ่มชื่น`
        )}
      </JobCardContent>
      <JobCardSubContent className="pl-3 pr-3">
        <FaStar className="text-warning mr-2"></FaStar>ค่าตอบแทน : 700 บาท
      </JobCardSubContent>
      <hr></hr>
      <p className="pl-3 pr-3 text-secondary">ระยะเวลา : 4 สัปดาห์</p>
    </JobCard>
  );
}

export default Card;
