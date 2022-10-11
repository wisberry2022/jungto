// import { useState } from 'react';
import Header from './header/Header';
import MainVisual from './header/MainVisual';
import Main from './main/Main';
import Footer from './footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignIn from './otherlink/SignIn/SignIn';

const Total = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" ?
        <>
          <MainVisual />
          <Main />
        </> :
        <Routes>
          <Route path="login/*" element={<SignIn />} />
        </Routes>}
      <Footer />
    </>
  )
}

export default Total;