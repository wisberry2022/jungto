import Intro from "./Intro/Intro";
import Board from "./Board/Board";
import RegisterReview from "./Board/OtherLink/registerReview/RegisterReview";
import UpdateReview from "./Board/OtherLink/registerReview/UpdateReview";
import Post from "./Board/OtherLink/post/Post";
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { UPDATE } from "../../store/module/reviewSlice";


const Practice = () => {
  const postingData = useSelector(state => state.review);
  const dispatch = useDispatch();
  const location = useLocation();

  // const exam = [
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

  useEffect(() => {
    axios.get('/mm_practice')
      .then((res) => (dispatch(UPDATE(res.data))));
  }, [location.pathname, dispatch])

  return (
    <div className="practice_wrapper">
      {location.pathname === '/mm_practice' ?
        <>
          <Intro />
          <Board postingData={postingData} />
        </> :
        <Routes>
          <Route path="reviewRegister" element={<RegisterReview />} />
          <Route path="reviewUpdate/:id" element={<UpdateReview postingData={postingData} />} />
          <Route path="post/:id" element={<Post postingData={postingData} />} />
        </Routes>
      }
    </div>
  )
}

export default Practice;