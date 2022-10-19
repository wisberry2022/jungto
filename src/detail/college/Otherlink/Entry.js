import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GET } from '../../../store/module/applicateSlice';
import { getTodayForm } from '../../../funcSet/funcSet';
import './Entry.scss';

const InputForm = ({ data, defaultValue }) => {
  const dispatch = useDispatch();
  const dataRef = useRef();

  useEffect(() => {
    if (defaultValue[data.name] !== undefined) {
      dataRef.current.value = defaultValue[data.name];
      const name = data.name;
      const value = defaultValue[name];
      dispatch(GET({ name, value }))
    }
  }, [defaultValue])

  const apply = (e) => {
    const { name, value } = e.target;
    dispatch(GET({ name, value }))
  }
  return (
    <>
      <td className="title">
        {data.title}
      </td>
      <td className="inputForm">
        {
          data.required_flag ?
            <input type={data.type} name={data.name} placeholder={data.placeholder} ref={dataRef} onChange={(e) => (apply(e))} required />
            :
            <input type={data.type} name={data.name} placeholder={data.placeholder} ref={dataRef} onChange={(e) => (apply(e))} />
        }
      </td>
    </>
  )
}

const ErrorModal = ({ setError, message }) => {
  return (
    <div className="error_modal">
      <p>
        에러입니다! 관리자에게 문의해주세요! <br />
        02-855-8341<br />
        <strong>{message}</strong>
      </p>
      <button onClick={() => (setError(false))}>확인</button>
    </div>
  )
}

const Application = () => {
  const storeData = useSelector(state => state.application);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const userData = useSelector(state => state.userdata);

  const dataList = [
    { id: 1, title: '아이디', type: "text", name: 'userId', placeholder: "아이디를 입력하세요", required_flag: true },
    { id: 2, title: '이름', type: "text", name: 'name', placeholder: "이름을 입력하세요", required_flag: true },
    { id: 3, title: '이메일', type: "email", name: 'email', placeholder: "이메일을 입력하세요", required_flag: false },
    { id: 4, title: '주소', type: "text", name: 'address', placeholder: "주소를 입력하세요", required_flag: true },
    { id: 5, title: '연락처', type: "tel", name: 'phone', placeholder: "연락처를 입력하세요", required_flag: true },
    { id: 6, title: '희망하는 입학일자', type: "date", name: 'date', placeholder: "입학일자를 입력하세요", required_flag: true },
  ];

  const submitHandling = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/collegeEntry', {
        userId: storeData.userId,
        name: storeData.name,
        email: storeData.email,
        address: storeData.address,
        phone: storeData.phone,
        desiredDate: storeData.date,
        assignDate: getTodayForm(),
      })
        .then((res) => {
          if (res.data.RESULT === 'SUCCESS') {
            navigate('/mm_college')
          } else if (res.data.RESULT === 'ALREADY_ASSIGN') {
            setError(true);
            setMessage('이미 입학신청을 하셨습니다!');
          }
        })
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="application">
      <form onSubmit={(e) => (submitHandling(e))} >
        <table>
          <thead>
            <tr>
              <th>신청</th>
              <th>입력</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map(it => {
              return (
                <tr key={it.id}>
                  <InputForm data={it} defaultValue={userData} />
                </tr>
              )
            })}
          </tbody>
        </table>
        <button type="submit" className="btn">신청하기</button>
        <strong className="warning">신청정보수정 및 취소는 마이페이지에서 할 수 있습니다</strong>
      </form>
      {error ? <ErrorModal setError={setError} message={message} /> : null}
    </div>
  )
}

const Entry = () => {
  return (
    <section className="entry">
      <div className="container">
        <div className="title_box">
          <h3>정토불교대학 입학신청</h3>
          <p>정토불교대학 입학신청</p>
        </div>
        <Application />
      </div>

    </section>
  )
}

export default Entry;