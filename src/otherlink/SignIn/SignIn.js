import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SignUp from './subpage/SignUp';
import FindPwd from './subpage/FindPwd';
import FindId from './subpage/FindId';
import './SignIn.scss'
import { useRef, useState } from 'react';
import { verifyData } from '../../store/module/loginSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const SignIn = () => {
  const [stateBool, setBool] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const idRef = useRef();
  const pwdRef = useRef();
  const dispatch = useDispatch();
  // console.log(`이전 주소:`, location.state.locate);

  // 로그인 정보 입력 후 서버 전송
  const loginHandling = async (e) => {
    e.preventDefault();
    let errorData;
    try {
      let result = await axios.post('/loginCheck', {
        userId: idRef.current.value,
        password: pwdRef.current.value,
      }).catch((error) => { errorData = error.response.data })
      localStorage.setItem('userState', result.data.ACCESS_TOKEN);
      dispatch(verifyData(result.data.ACCESS_TOKEN))
      // navigate('/');
      navigate(location.state.locate);
    } catch (error) {
      setBool(false);
    }
  }

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
            <form className="signin_box" onSubmit={(e) => (loginHandling(e))}>
              <div className="inner_box">
                <div className="input_box">
                  <input type="text" name="id" id="id" ref={idRef} placeholder="아이디" required />
                  <input type="password" name="pwd" id="pwd" ref={pwdRef} placeholder="비밀번호" required />
                </div>
                {stateBool ? null : <strong>아이디, 비밀번호가 잘못되었습니다</strong>}
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