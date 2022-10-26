import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = [];

const postData = createAsyncThunk('reviewSlice/postData', (dataArr) => {
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
  return data;
})

const deleteData = createAsyncThunk('reviewSlice/deleteData', async (deleteInfo) => {
  let data = await axios.delete('/delete', {
    data: {
      _id: deleteInfo[0],
      pwd: deleteInfo[1],
    }
  })
  return data;
})

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  reducers: {
    UPDATE: (state, action) => {
      state = [...action.payload.map((it, idx) => ({ ...it, id: idx + 1 }))];
      return state;
    },
    SEARCH: (state, action) => {
      const searchTarget = action.payload;
      state = state.filter(it => { return it.title.indexOf(searchTarget) > -1 });
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

export default reviewSlice.reducer;
export const { ADD, UPDATE, SEARCH } = reviewSlice.actions;
export { postData, updateData, deleteData }