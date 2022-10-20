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

  useEffect(() => {
    axios.get('/mm_practice')
      .then((res) => (dispatch(UPDATE(res.data))));
    console.log('Practice.js useEffect 실행!')
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