import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { logState: false };

const LOGIN = createAsyncThunk('loginSlice/LOGIN', async (dataObj) => {
  console.log('LOGIN REDUCER:', dataObj);
  await axios.post('/loginCheck', dataObj)
    .then((res) => (console.log(res)));
});

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(LOGIN.fulfilled, (state, action) => {
      return state;
    })
  }
});

export default loginSlice;
export { LOGIN };