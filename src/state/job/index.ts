import { createSlice } from "@reduxjs/toolkit";
import { fetchJobList } from "./actions";
import { Loading } from "../type";

const initialState: Loading = {
  loading: false,
};

export const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJobList.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchJobList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default JobSlice.reducer;
