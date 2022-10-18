import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const getUserData = createAsyncThunk('userDataSlice/getUserData', async (userState) => {
  let data = await axios.post('/getData', {}, {
    headers: {
      authorization: userState,
    }
  })
    .catch((error) => {
      const errorData = error.response.data;
      return errorData.ACCESS_DATA;
    })
    .then((res) => {
      return res.data;
    })

  return data;
})

const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    }
  },
  extraReducers: (builer) => {
    builer.addCase(getUserData.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    })
    builer.addCase(getUserData.rejected, (state, action) => {
      return state;
    })
  }
})

export default userDataSlice.reducer;
export const { GET } = userDataSlice.actions;
export { getUserData };