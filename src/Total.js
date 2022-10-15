import MainVisual from './header/MainVisual';
import Main from './main/Main';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import SignIn from './otherlink/SignIn/SignIn';
import MyPage from './otherlink/MyPage/MyPage';

const Total = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ?
        <>
          <MainVisual />
          <Main />
        </> :
        <Routes>
          <Route path="login/*" element={<SignIn />} />
          <Route path="myPage" element={<MyPage />} />
        </Routes>}
    </>
  )
}

export default Total;