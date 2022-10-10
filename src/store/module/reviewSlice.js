import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = [];

const postData = createAsyncThunk('reviewSlice/postData', (dataArr) => {
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

// const updateData = createAsyncThunk('reviewSlice/updateData', () => {

// })

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  reducers: {
    ADD: (state, action) => {
      const headList = ['title', 'author', 'email', 'pwd', 'body', 'date'];
      state.board.push(headList.reduce((acc, cur, idx) => {
        acc[cur] = action.payload[idx];
        return acc;
      }, {}))
      state.id += 1;
    },
    UPDATE: (state, action) => {
      state = [...action.payload.map((it, idx) => ({ ...it, id: idx + 1 }))];
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postData.fulfilled, (state, action) => {
      console.log('extrareducers 내부 thunk 실행!')
      return state;
    })
  }
})

export default reviewSlice;
export const { ADD, UPDATE } = reviewSlice.actions;
export { postData }