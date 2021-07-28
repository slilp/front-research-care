import { useSelector } from "react-redux";
import { Loading } from "./type";

export const useAuthSelector = (): any => {
  return useSelector((state: any) => state.auth);
};

export const useJobSelector = (): Loading => {
  return useSelector((state: any) => state.job);
};
