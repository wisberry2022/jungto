import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCollegeList } from "../../store/module/userSlice";
import { isEmpty } from "../../funcSet/funcSet";
import './MyPage.scss';

const NoneDisplay = () => {
  return (
    <div className="none_display">
      <strong>없음</strong>
    </div>
  )
}

const CollegeList = () => {
  const collegeList = useSelector(state => state.user.collegeList);
  const theadList = ['순번', '신청행사명', '신청자이름', '신청날짜', '희망입학날짜'];
  return (
    <div className="collegeList">
      {console.log(`collegeList 컴포넌트 내`, collegeList)}
      <table>
        <thead>
          <tr>
            {theadList.map((it, idx) => {
              return (
                <th key={idx}>
                  {it}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {!isEmpty(collegeList) ?
            <tr>
              <td>1</td>
              <td>정토불교대학 입학</td>
              <td>{collegeList.name}</td>
              <td>{collegeList.assignDate}</td>
              <td>{collegeList.desiredDate.slice(0, 10)}</td>
            </tr>
            :
            <NoneDisplay />}
        </tbody>
      </table>
    </div>
  )
}

const UserBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(state => state.login.userId);
  const token = localStorage.getItem('userState');
  useEffect(() => {
    dispatch(getCollegeList([userId, token]))
  }, [dispatch])

  const logState = useSelector(state => state.login.logState);
  return (
    <div className="user_box">
      {logState ?
        <>
          <h4>{userId}님의 행사 및 수행신청 정보</h4>
          <div className="aplc_list">
            <div className="college_list">
              <h5>정토불교대학 신청내역</h5>
              <CollegeList />
            </div>
          </div>
        </> :
        navigate('/')}
    </div>
  )
}

const MyPage = () => {
  return (
    <section className="my_page">
      <div className="container">
        <div className="title_box">
          <h3>마이페이지</h3>
          <p>신청한 행사내용, 후원내역 등을 확인할 수 있습니다</p>
        </div>
        <UserBox />
      </div>
    </section>
  )
}

export default MyPage;