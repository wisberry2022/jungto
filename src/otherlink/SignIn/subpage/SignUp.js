import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodayForm } from '../../../funcSet/funcSet';
import './SignUp.scss';

const SignUp = () => {
  const idRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();

  const [email, checkEmail] = useState('');
  const [pwd, checkPwd] = useState();
  const [emailBool, setMB] = useState(false);
  const [pwdBool, setPB] = useState(false);

  const mailCheck = (e) => {
    const checkReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (checkReg.test(e.target.value)) {
      checkEmail(e.target.value)
      setMB(true);
    } else {
      setMB(false);
    }
  }

  const pwdCheck = (e) => {
    const checkReg = /^[a-z0-9_]{4,20}$/g;
    if (checkReg.test(e.target.value)) {
      checkPwd(e.target.value);
      setPB(true);
    } else {
      setPB(false);
    }
  }

  const assignMember = async (e) => {
    e.preventDefault();
    await axios.post('/assignMember', {
      userId: idRef.current.value,
      password: pwd,
      email: email,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      assignDate: getTodayForm(),
    })
    navigate('/login');
  }

  return (
    <div className="signup_section">
      <div className="container">
        <div className="title_box">
          <h3>정토회 회원가입</h3>
        </div>
        <div className="signup_box">
          <form onSubmit={(e) => (assignMember(e))}>
            <table>
              <thead>
                <tr>
                  <th>레이블</th>
                  <th>입력폼</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="title necessary">
                    <label htmlFor="id">아이디</label>
                  </td>
                  <td className="input">
                    <input type="text" id="id" name="id" ref={idRef} required />
                  </td>
                </tr>
                <tr>
                  <td className="title necessary">
                    <label htmlFor="pwd">비밀번호</label>
                  </td>
                  <td className="input">
                    <input type="password" id="pwd" name="pwd" onChange={(e) => (pwdCheck(e))} required />
                    {pwdBool ? null : <strong className="alert">비밀번호는 4자리에서 20자리 사이의 특수문자를 제외한 알파벳, 숫자를 사용하여 주세요</strong>}
                  </td>
                </tr>
                <tr>
                  <td className="title necessary">
                    <label htmlFor="email">이메일</label>
                  </td>
                  <td className="input">
                    <input type="email" id="email" name="email" onChange={(e) => (mailCheck(e))} required />
                    {emailBool ? null : <strong className="alert">올바른 이메일 형식으로 작성해주세요</strong>}
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    <label htmlFor="address">주소</label>
                  </td>
                  <td className="input">
                    <input type="text" id="address" name="address" ref={addressRef} required />
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    <label htmlFor="phone">전화번호</label>
                  </td>
                  <td className="input">
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" ref={phoneRef} required />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn">
              회원가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;