import MainVisual from './header/MainVisual';
import Main from './main/Main';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignIn from './otherlink/SignIn/SignIn';

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
        </Routes>}
    </>
  )
}

export default Total;