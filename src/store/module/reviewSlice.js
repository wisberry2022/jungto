import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const getData = createAsyncThunk('reviewSlice/getData', (dataArr) => {
  console.log('thunk 실행!', dataArr);
  let data = axios.post('/register', {
    title: dataArr[0],
    author: dataArr[1],
    email: dataArr[2],
    password: dataArr[3],
    contents: dataArr[4],
    date: dataArr[5],
  });
  return data;
})

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState: { id: 1, board: [] },
  reducers: {
    ADD: (state = this.initialState, action) => {
      action.payload.push(state.id);
      const headList = ['title', 'author', 'email', 'pwd', 'body', 'date', 'id'];
      state.board.push(headList.reduce((acc, cur, idx) => {
        acc[cur] = action.payload[idx];
        return acc;
      }, {}))
      state.id += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log('extrareducers 내부 thunk 실행!')
      return state;
    })
  }
})

export default reviewSlice;
export const { ADD } = reviewSlice.actions;
export { getData }