import * as Styled from '../../../funcSet/styledSet';
import { useSelector } from 'react-redux';
import { useEffect, useReducer, useState, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state[action.name] = action.value;
    default:
      return state;
  }
}

const TitleBox = () => {
  return (
    <Styled.StyledTitleBox marginBottom={'3rem'}>
      <Styled.StyledTitle align={'left'}>
        수련 신청하기
      </Styled.StyledTitle>
    </Styled.StyledTitleBox>
  )
}

const ErrorModal = ({ setModal, MSG }) => {
  const logState = useSelector(state => state.login.logState);
  const location = useLocation();
  return (
    <div className="error_modal">
      <p>
        {MSG === "" ? "먼저 로그인해주세요!" : MSG}
      </p>
      <button type="button" onClick={() => (setModal(true))}>
        <Link to={logState ? "/mm_train" : "/login"} state={{ locate: location.pathname }}>확인</Link>
      </button>
    </div>
  )
}

const Table = ({ id }) => {
  const trainList = ['깨달음의 장', '나눔의 장', '49일 문경살이', '주말 문경살이', '일상에서 깨어있기'];
  const logState = useSelector(state => state.login.logState);
  const userData = useSelector(state => state.userdata);
  const location = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);
  const [MSG, setMSG] = useState('');
  const token = localStorage.getItem('userState');
  const selectRef = useRef();
  const idRef = useRef();
  const telRef = useRef();
  const mailRef = useRef();
  const [entryData, dispatch] = useReducer(Reducer, {});

  useEffect(() => {
    idRef.current.value = userData.userId ? userData.userId : null;
    telRef.current.value = userData.phone ? userData.phone : null;
    mailRef.current.value = userData.email ? userData.email : null;
    [selectRef.current, idRef.current, telRef.current, mailRef.current].map(it => dispatch({ type: 'ADD', name: it.name, value: it.value }))
  }, [dispatch, logState, userData])

  const addData = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'ADD', name, value })
  }

  const submitHandling = (e) => {
    e.preventDefault();
    if (logState) {
      axios.post('/entryTrain', entryData, {
        headers: {
          authorization: token,
        }
      })
        .catch((error) => {
          console.log('axios 에러', error.response.data);
          const { ERROR_MESSAGE } = error.response.data;
          setMSG(ERROR_MESSAGE);
          setModal(false);
        })
        .then((result) => {
          if (result.data.ACCESS_RESULT) {
            console.log('axios 성공')
            navigate('/mm_train');
          }
        })
    } else {
      setModal(false);
      setMSG('');
    }
  }
  return (
    <Styled.StyledDiv padding={"5rem"}>
      <Styled.StyledContainer>
        <TitleBox />
        {logState ? null : <Styled.StyledWarningLine>로그인 후 신청할 수 있습니다!</Styled.StyledWarningLine>}
        <form className="train_form" onSubmit={(e) => (submitHandling(e))}>
          <Styled.StyledTable position={'relative'} className="train_table">
            <thead>
              <tr>
                <th>범주</th>
                <th>항목</th>
                <th>입력란</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan="5" className="table_title">신청자 정보</th>
                <th className="table_stitle">아이디</th>
                <td>
                  <input type="text" name="userId" ref={idRef} onChange={(e) => (addData(e))} required />
                </td>
              </tr>
              <tr>
                <th className="table_stitle">연락처</th>
                <td>
                  <input type="tel" name="phone" ref={telRef} onChange={(e) => (addData(e))} required />
                </td>
              </tr>
              <tr>
                <th className="table_stitle">이메일</th>
                <td>
                  <input type="text" name="email" ref={mailRef} onChange={(e) => (addData(e))} required />
                </td>
              </tr>
              <tr>
                <th className="table_stitle">이름</th>
                <td>
                  <input type="text" name="name" onChange={(e) => (addData(e))} required placeholder="예)홍길동" />
                </td>
              </tr>
              <tr>
                <th className="table_stitle">성별</th>
                <td className="gender">
                  <div className="gender_box">
                    <input type="radio" name="gender" value="남자" onChange={(e) => (addData(e))} required /> <strong>남자</strong>
                  </div>
                  <div className="gender_box">
                    <input type="radio" name="gender" value="여자" onChange={(e) => (addData(e))} required /> <strong>여자</strong>
                  </div>
                </td>
              </tr>
              <tr>
                <th rowSpan="2" className="table_title">수련 정보</th>
                <th className="table_stitle">신청 희망 수련</th>
                <td className="select_set">
                  <select name="trainType" onChange={(e) => (addData(e))} ref={selectRef} disabled>
                    {trainList.map((it, idx) => {
                      return (
                        idx === id ? <option key={idx} value={it} selected>{it}</option> : <option key={idx} value={it}>{it}</option>
                      )
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <th className="table_stitle">입소 희망 시기</th>
                <td className="select_set">
                  <select name="desiredYear" onChange={(e) => (addData(e))}>
                    <option value="">입소 희망 년도</option>
                    {Array.from({ length: 2 }).fill(new Date().getFullYear()).map((it, idx) => { return it + idx }).map(el => {
                      return (
                        <option key={el} value={el}>{el}년</option>
                      )
                    })}
                  </select>
                  <select name="desiredMonth" onChange={(e) => (addData(e))}>
                    <option value="">입소 희망 월</option>
                    {Array.from({ length: 12 }, (v, k) => k + 1).map(it => {
                      return (
                        <option key={it} value={it}>{it}월</option>
                      )
                    })}
                  </select>
                  <Styled.StyledWarningLine>자세한 입소 일자 및 장소는 신청 후 개별 공지합니다</Styled.StyledWarningLine>
                </td>
              </tr>
            </tbody>
            {modal ? null : <ErrorModal setModal={setModal} MSG={MSG} />}
          </Styled.StyledTable>
          <button type="submit" className="btn">신청하기</button>
        </form>
      </Styled.StyledContainer>
    </Styled.StyledDiv>
  )
}

export default Table;