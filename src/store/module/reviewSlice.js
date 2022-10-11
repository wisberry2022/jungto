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

const updateData = createAsyncThunk('reviewSlice/updateData', async (dataArr) => {
  let data = await axios.put('/update', {
    _id: dataArr[0],
    title: dataArr[1],
    author: dataArr[2],
    email: dataArr[3],
    password: dataArr[4],
    contents: dataArr[5],
    date: dataArr[6],
  });
  console.log(`updateData 보기:`, data);
  return data;
})

const deleteData = createAsyncThunk('reviewSlice/deleteData', async (userPwd) => {
  console.log(`deleteData 내부 데이터:`, userPwd);
  let data = await axios.delete('/delete', {
    data: {
      pwd: userPwd,
    }
  })
  console.log(`deleteData 보기:`, data);
  return data;
})

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
      return state;
    })
    builder.addCase(updateData.fulfilled, (state, action) => {
      return state;
    })
    builder.addCase(deleteData.fulfilled, (state, action) => {
      return state;
    })
  }
})

export default reviewSlice;
export const { ADD, UPDATE } = reviewSlice.actions;
export { postData, updateData, deleteData }