import { useCallback } from "react";
import { login, logout, checkUser } from "../state/actions";
import { useAppDispatch } from "../state";

function useAuth() {
  const dispatch = useAppDispatch();

  const signin = useCallback(
    async (username: any, password: any) => {
      const response = await dispatch(
        login({ username: username, password: password })
      );
      return response;
    },
    [dispatch]
  );

  const signout = useCallback(async () => {
    await dispatch(logout());
  }, [dispatch]);

  const checkAuth = useCallback(async () => {
    const response = await dispatch(checkUser());
    return response;
  }, [dispatch]);

  return {
    signin,
    signout,
    checkAuth,
  };
}

export default useAuth;
