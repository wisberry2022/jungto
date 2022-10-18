import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import * as Styled from '../../../../../funcSet/styledSet';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../../../store/module/userdataSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(`usereducer inner`, action);
      state[action.name] = action.value;
    case 'SET':
      state[action.name] = action.value;
    default:
      return state;
  }
}

const SelectForm = ({ setPrice, addData }) => {

  const selectData = [
    { id: 1, title: 'startYear', list: Array.from({ length: 3 }).fill().map((_, idx) => { return new Date().getFullYear() + idx }), unit: '년', firstHead: '구독 시작 년도 선택' },
    { id: 2, title: 'startMonth', list: Array.from({ length: 12 }, (v, k) => k + 1), unit: '월', firstHead: '구독 시작 월 선택' },
    { id: 1, title: 'duringYear', list: [1, 2, 3, 4, 5, 10], unit: '년', firstHead: '구독 기간 선택' },
  ];

  return (
    <div className="select_set">
      {selectData.map((it, idx) => {
        return (
          it.title === 'duringYear' ?
            <select key={idx} name={it.title} onChange={(e) => (setPrice(e.target.value * 10000), addData(e))}>
              <option key={idx}>{it.firstHead}</option>
              {it.list.map(its => {
                return <option key={its} value={its}>{its}{it.unit}</option>
              })}
            </select>
            :
            <>
              <select key={idx} name={it.title} onChange={(e) => (addData(e))}>
                <option key={idx}>{it.firstHead}</option>
                {it.list.map(its => {
                  return <option key={its} value={its}>{its}{it.unit}</option>
                })}
              </select>
            </>
        )
      })}
    </div>
  )
}

const ErrorModal = ({ setModal, MSG }) => {
  return (
    <div className="error_modal">
      <p>
        {MSG === "" ? "먼저 로그인해주세요!" : MSG}
      </p>
      <button type="button" onClick={() => (setModal(true))}>확인</button>
    </div>
  )
}

const Table = () => {
  const [price, setPrice] = useState(0);
  const [modal, setModal] = useState(true);
  const [msg, setMSG] = useState('');
  const [assignData, originDispatch] = useReducer(Reducer, { 'price': price });
  const userData = useSelector(state => state.userdata);
  const logState = useSelector(state => state.login.logState);
  const navigate = useNavigate();
  const theadList = ['입력정보', '입력정보', '입력폼'];
  const idRef = useRef();
  const appTelRef = useRef();
  const subTelRef = useRef();
  const addressRef = useRef();
  const motiveRef = useRef();

  const addData = (event) => {
    const { name, value } = event.target;
    originDispatch({ type: 'ADD', name, value });
  }

  const setData = (name, value) => {
    originDispatch({ type: 'SET', name, value });
  }

  useEffect(() => {
    if (userData.phone !== undefined) {
      console.log('useEffect 내부', [idRef.current, appTelRef.current, subTelRef.current, addressRef.current]);
      idRef.current.value = userData.userId ? userData.userId : null;
      appTelRef.current.value = userData.phone ? userData.phone : null;
      subTelRef.current.value = userData.phone ? userData.phone : null;
      addressRef.current.value = userData.address ? userData.address : null;
      [idRef.current, appTelRef.current, subTelRef.current, addressRef.current].map(it => (setData(it.name, it.value)));
    }
  }, [userData])

  useEffect(() => {
    setData('price', price)
  }, [price])

  const submitHandling = async (e) => {
    e.preventDefault();
    if (logState) {
      setData('motivation', motiveRef.current.value);
      await axios.post('/assignMagazine', assignData)
        .then((res) => {
          console.log(res);
          if (res.data.ACCESS_RESULT) {
            navigate(-1);
          }
        })
        .catch((error) => {
          const { ERROR_TYPE, ACCESS_RESULT } = error.response.data;
          setModal(ACCESS_RESULT);
          setMSG(ERROR_TYPE);
        })
    } else {
      setModal(logState);
    }
  }

  return (
    <form onSubmit={(e) => (submitHandling(e))}>
      {console.log(`userData`, userData)}
      <table className="subscribe_table">
        <thead>
          <tr>
            {theadList.map((it, idx) => {
              return (
                <th key={idx}>{it}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="3" className="table_title">신청자</th>
            <th className="table_stitle">아이디</th>
            <td>
              <input type="text" name="userId" ref={idRef} onChange={(e) => (addData(e))} required />
            </td>
          </tr>
          <tr>
            <th className="table_stitle">이름</th>
            <td>
              <input type="text" name="name" placeholder="예)홍길동" onChange={(e) => (addData(e))} required />
            </td>
          </tr>
          <tr>
            <th className="table_stitle">휴대폰</th>
            <td>
              <input type="tel" name="phone" ref={appTelRef} onChange={(e) => (addData(e))} required />
            </td>
          </tr>
          <tr>
            <th rowSpan="3" className="table_title">구독자</th>
            <th className="table_stitle">이름</th>
            <td>
              <input type="tel" name="subName" placeholder="예)홍길동" onChange={(e) => (addData(e))} required />
            </td>
          </tr>
          <tr>
            <th className="table_stitle">휴대폰</th>
            <td>
              <input type="tel" name="subPhone" ref={subTelRef} onChange={(e) => (addData(e))} required />
            </td>
          </tr>
          <tr>
            <th className="table_stitle">주소</th>
            <td>
              <input type="text" name="address" ref={addressRef} onChange={(e) => (addData(e))} required />
            </td>
          </tr>
          <tr>
            <th rowSpan="2" className="table_title">구독정보</th>
            <th className="table_stitle">구독기간</th>
            <td>
              <SelectForm setPrice={setPrice} addData={addData} />
            </td>
          </tr>
          <tr>
            <th className="table_stitle">구독동기</th>
            <td>
              <textarea ref={motiveRef} />
            </td>
          </tr>
          <tr>
            <th rowSpan="2" className="table_title">납부정보</th>
            <th className="table_stitle">계좌선택</th>
            <td>
              <div className="account">
                <div className="account_box">
                  <input type="radio" name="account" value="국민은행: 0830291-11-999123 왕인서 (월간정토)" required onChange={(e) => (addData(e))} /> <strong>국민은행: 0830291-11-999123 왕인서 (월간정토)</strong>
                </div>
                <div className="account_box">
                  <input type="radio" name="account" value="농협: 312-1123-4125-93 왕인서 (월간정토)" required onChange={(e) => (addData(e))} /> <strong>농협: 312-1123-4125-93 왕인서 (월간정토)</strong>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="table_stitle">납부구독료</th>
            <td>
              {price.toLocaleString()}원
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn">구독 신청하기</button>
      {!modal ? <ErrorModal setModal={setModal} MSG={msg} /> : null}
    </form>
  )
}

const Subscribe = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('userState');
  const logState = useSelector(state => state.login.logState);
  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token])

  return (
    <Styled.StyledDiv padding={'3rem'}>
      <Styled.StyledSemiTitle align={'left'}>
        월간정토 구독신청
      </Styled.StyledSemiTitle>
      <Styled.StyledSemiPhase marginBottom={'5rem'} align={'left'}>
        정기구독 수익금은 &#60;월간정토&#62;를 법보시하는데 사용됩니다.
      </Styled.StyledSemiPhase>
      {!logState ? <Styled.StyledWarningLine marginBottom={'1rem'}>로그인 후 구독 신청 할 수 있습니다!</Styled.StyledWarningLine> : null}
      <Table />
    </Styled.StyledDiv>
  )
}

export default Subscribe;