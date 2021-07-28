import { createSlice } from "@reduxjs/toolkit";
import { signIn, checkToken, LoginPara } from "./actions";
import { setToken, getToken, removeToken } from "./storage";
interface AuthUser {
  user: UserInfo;
  isAuthenticated: boolean;
}

interface UserInfo {
  username: string;
  firstName: string;
  lastName: string;
}

const initialState: AuthUser = {
  user: { username: "", firstName: "", lastName: "" },
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user.username = action.payload.username;
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.isAuthenticated = true;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user.username = "";
      state.user.firstName = "";
      state.user.lastName = "";
    },
  },
});

// Actions
export const { setAuthUser, clearAuth } = AuthSlice.actions;

// Thunks
export const login =
  (request: LoginPara) => async (dispatch: any, getState: any) => {
    try {
      const loginApi = await signIn(request);
      setToken({ accessToken: "my_token" });
      if (loginApi) {
        dispatch(
          setAuthUser({
            username: request.username,
            firstName: "ทดสอบ",
            lastName: "ระบบ",
          })
        );
        return true;
      } else {
        dispatch(clearAuth());
        return false;
      }
    } catch (error) {
      dispatch(clearAuth());
      throw Error(error);
    }
  };

export const logout = () => async (dispatch: any) => {
  dispatch(clearAuth());
  removeToken();
};

export const checkUser = () => async (dispatch: any) => {
  try {
    const token = getToken();
    if (token) {
      const check = await checkToken();
      if (check) {
        dispatch(
          setAuthUser({
            username: "tester",
            firstName: "ทดสอบ",
            lastName: "ระบบ",
          })
        );
        return true;
      } else {
        dispatch(clearAuth());
        removeToken();
        return false;
      }
    } else {
      dispatch(clearAuth());
      removeToken();
      return false;
    }
  } catch (error) {
    dispatch(clearAuth());
    removeToken();
    throw Error(error);
  }
};

export default AuthSlice.reducer;
