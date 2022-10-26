import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = [];

// const initialState = [
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 1,
//     "title": "감사합니다!",
//     "author": "왕인서",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 2,
//     "title": "수고하셨습니다!",
//     "author": "김주은",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 3,
//     "title": "수행5일차",
//     "author": "오창석",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 4,
//     "title": "완전 대박",
//     "author": "김지훈",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 5,
//     "title": "완전 좋아요",
//     "author": "주경석",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 6,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 7,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 8,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 9,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 10,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 11,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 12,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
//   {
//     "_id": {
//       "$oid": "6340a5d5e6a290dfcba72877"
//     },
//     "id": 13,
//     "title": "매일매일을 감사하며 살 수 있게 되었습니다",
//     "author": "박진성",
//     "email": "ground444@naver.com",
//     "password": "103030200",
//     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
//     "date": "2022-10-08",
//     "__v": 0
//   },
// ];

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