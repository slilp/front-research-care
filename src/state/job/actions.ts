import { createAsyncThunk } from "@reduxjs/toolkit";
import { MainResponse } from "../type";
import { JobInfo } from "./type";

const mockList: MainResponse<JobInfo[]> = {
  status: true,
  code: "200",
  desc: "success",
  data: new Array(10).fill({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmb46QLRqqoTv6MRAlvCKqeb1J3QnqV7Tjg&usqp=CAU",
    title: "ครีมบำรุง",
    desc: "สารสกัดจากธรรมชาติ ด้วยคุณค่าจากสาหร่ายทะเลน้ำลึก ช่วยให้ผิวชุ่มชื่น",
    salary: 700,
    point: 50,
    period: 4,
  }),
};

export const fetchJobList = createAsyncThunk(
  "job/fetchJobList",
  async (type: string): Promise<MainResponse<JobInfo[]>> => {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return mockList;
  }
);
