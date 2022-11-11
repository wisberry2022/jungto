import * as Styled from '../../funcSet/styledSet';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAppList } from "../../store/module/appSlice";
import { isEmpty } from "../../funcSet/funcSet";
import { NoneDisplay } from "./NoneDisplay";
import MagazineList from "./MagazineList";
import TrainList from './TrainList';
import './MyPage.scss';

const CollegeList = () => {
  const collegeList = useSelector(state => state.app.collegeList);
  const theadList = ['순번', '신청행사명', '신청자이름', '신청날짜', '희망입학날짜'];
  return (
    <div className="collegeList">
      <table>
        <thead>
          <tr>
            {theadList.map((it, idx) => {
              return (
                <Styled.StyledTableHead key={idx}>
                  {it}
                </Styled.StyledTableHead>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {!isEmpty(collegeList) ?
            <tr>
              <Styled.StyledTableData padding={'2rem'}>1</Styled.StyledTableData>
              <Styled.StyledTableData>정토불교대학 입학</Styled.StyledTableData>
              <Styled.StyledTableData>{collegeList.name}</Styled.StyledTableData>
              <Styled.StyledTableData>{collegeList.assignDate}</Styled.StyledTableData>
              <Styled.StyledTableData>{collegeList.desiredDate.slice(0, 10)}</Styled.StyledTableData>
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
    dispatch(getAppList([userId, token]))
  }, [dispatch, userId, token])

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
        <MagazineList />
        <TrainList />
      </div>
    </section>
  )
}

export default MyPage;