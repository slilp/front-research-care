import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthUser {
  firstName: string;
  lastName: string;
  loading: boolean;
  error: string | undefined | null;
  user: any;
}

const initialState: AuthUser = {
  firstName: "",
  lastName: "",
  loading: false,
  error: null,
  user: {},
};

export const fetchRandomUser = createAsyncThunk(
  "auth/fetchRandomUser",
  async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw Error(error);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUserOne: (state) => {
      state.firstName = "one firstName";
      state.lastName = "one lastName";
    },
    setAuthUserTwo: (state) => {
      state.firstName = "two firstName";
      state.lastName = "two lastName";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRandomUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchRandomUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

// Actions
export const { setAuthUserOne, setAuthUserTwo } = AuthSlice.actions;

// Thunks
export const changeUserDataAsync =
  () => async (dispatch: any, getState: any) => {
    if (getState().auth.firstName === "one firstName") {
      dispatch(setAuthUserTwo());
    } else {
      dispatch(setAuthUserOne());
    }
  };

export default AuthSlice.reducer;
