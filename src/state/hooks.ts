import { useSelector } from "react-redux";

export const useAuth = (): any => {
  const user = useSelector((state: any) => state.auth);
  return user;
};
