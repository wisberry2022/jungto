import { useSelector } from "react-redux";
import './MyPage.scss';

const UserBox = ({ userInfo }) => {
  // const theadList = ['순번', '행사이름', '신청일자', '']
  return (
    <div className="user_box">
      <h4>{userInfo.userId}님의 행사 및 수행신청 정보</h4>
      <table>
        <thead>
          <tr>

          </tr>
        </thead>
      </table>
    </div>
  )
}

const MyPage = () => {
  const userInfo = useSelector(state => state.user);
  return (
    <section className="my_page">
      <div className="container">
        {console.log('userinfo', userInfo)}
        <div className="title_box">
          <h3>마이페이지</h3>
          <p>신청한 행사내용, 후원내역 등을 확인할 수 있습니다</p>
        </div>
        <UserBox userInfo={userInfo} />
      </div>
    </section>
  )
}

export default MyPage;