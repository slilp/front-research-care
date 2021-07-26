import { useSelector } from "react-redux";

export const useAuthSelector = (): any => {
  return useSelector((state: any) => state.auth);
};
