import Intro from "./Intro/Intro";
import Board from "./Board/Board";
import RegisterReview from "./Board/OtherLink/registerReview/RegisterReview";
import Post from "./Board/OtherLink/post/Post";
import { Route, Routes, useLocation } from 'react-router-dom';

const Practice = () => {
  const location = useLocation();
  return (
    <div className="practice_wrapper">
      {location.pathname === '/mm_practice' ?
        <>
          <Intro />
          <Board />
        </> :
        <Routes>
          <Route path="reviewRegister" element={<RegisterReview />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
      }
    </div>
  )
}

export default Practice;