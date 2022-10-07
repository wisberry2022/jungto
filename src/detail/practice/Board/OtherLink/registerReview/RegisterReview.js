import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postData, ADD } from '../../../../../store/module/reviewSlice';
import './RegisterReview.scss';
import { useRef } from 'react';
import { getTodayForm } from '../../../../../funcSet/funcSet';


const FormBox = () => {

  const dispatch = useDispatch();

  const titleRef = useRef();
  const authorRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const bodyRef = useRef();
  const today = getTodayForm();

  return (
    <div className="form_box">
      <h4>게시글 등록하기</h4>
      <form className="review_box">
        <div className="title_set">
          <input type="text" name="review_title" placeholder="제목을 입력하세요" id="title" ref={titleRef} required />
          <input type="text" name="review_author" placeholder="이름을 입력하세요" id="author" ref={authorRef} required />
        </div>
        <div className="info_set">
          <input type="email" name="review_email" placeholder="이메일을 입력하세요" ref={emailRef} id="email" />
          <input type="password" name="review_pwd" placeholder="비밀번호를 입력하세요" ref={pwdRef} id="pwd" required />
        </div>
        <div className="body">
          <h5>본문</h5>
          <textarea placeholder="후기를 작성해주세요!" id="body" ref={bodyRef} required></textarea>
        </div>
        <button type="submit" className="btn">
          <Link to="/mm_practice" onClick={() => (dispatch(postData([titleRef.current.value, authorRef.current.value, emailRef.current.value, pwdRef.current.value, bodyRef.current.value, today])))}>등록하기</Link>
          {/* <Link to="/mm_practice" onClick={() => (dispatch(ADD([titleRef.current.value, authorRef.current.value, emailRef.current.value, pwdRef.current.value, bodyRef.current.value, today])))}>등록하기</Link> */}
        </button>
      </form>
    </div>
  )
}

const RegisterReview = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="semi_title">
          <h3>실천기록장 등록하기</h3>
          <p>당신의 수행 실천의 경험을 다른 수행자들에게 공유해보세요</p>
        </div>
        <FormBox />

      </div>
    </section>
  )
}

export default RegisterReview;