import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCollegeList } from "../../store/module/userSlice";
import './MyPage.scss';

const CollegeList = ({ userId }) => {
  const dispatch = useDispatch();
  const collegeList = useSelector(state => state.user.collegeList);
  const token = localStorage.getItem('userState');
  useEffect(() => {
    dispatch(getCollegeList([userId, token]))
  }, [dispatch])
  return (
    <div className="collegeList">
      {console.log(collegeList)}
    </div>
  )
}

const UserBox = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.login.userId);
  // const theadList = ['순번', '행사이름', '신청일자', '']
  return (
    <div className="user_box">
      {userId ?
        <>
          <h4>{userId}님의 행사 및 수행신청 정보</h4>
          <div className="aplc_list">
            <div className="college_list">
              <h5>정토불교대학 신청내역</h5>
              <CollegeList userId={userId} />
            </div>
          </div>
        </> : navigate('/')}
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