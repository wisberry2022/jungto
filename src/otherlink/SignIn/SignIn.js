import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './subpage/SignUp';
import FindPwd from './subpage/FindPwd';
import FindId from './subpage/FindId';
import './SignIn.scss'

const SignIn = () => {
  const location = useLocation();
  return (
    <section className="signin_section">
      {location.pathname === '/login'
        ?
        <div className="container">
          <h3>로그인하기</h3>
          <div className="total_box">
            <h4>
              <img src="./detail_logo.png" alt="jungto" />
            </h4>
            <form className="signin_box">
              <div className="inner_box">
                <div className="input_box">
                  <input type="text" name="id" id="id" placeholder="아이디" required />
                  <input type="password" name="pwd" id="pwd" placeholder="비밀번호" required />
                </div>
                <button type="submit" className="btn">
                  로그인하기
                </button>
                <ul className="sub_link">
                  <li><Link to="findPwd">비밀번호 찾기</Link></li>
                  <li><Link to="findId">아이디 찾기</Link></li>
                  <li><Link to="SignUp">회원가입</Link></li>
                </ul>
              </div>
            </form>
          </div>
        </div > :
        <Routes>
          <Route path="findPwd" element={<FindPwd />} />
          <Route path="findId" element={<FindId />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      }

    </section >
  )
}

export default SignIn;