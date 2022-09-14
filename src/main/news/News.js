import './news.scss';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="title_box">
          <h3>언론 속 정토회</h3>
          <p>정토회의 소식을 확인할 수 있습니다</p>
        </div>
        <div className="news_box">
          <Link to="/" className="btn more">뉴스 더 보기</Link>
          <table className="news_table">
            <thead>
              <tr>
                <th>제목</th>
                <th>언론사</th>
                <th>발행일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="title">"10분만에 땀 주룩" ... 강남 구룡마을 수해복구 함께해보니</td>
                <td className="media">이데일리</td>
                <td className="date">2022.09.06</td>
              </tr>
              <tr>
                <td className="title">정토회, 단기출가 프로그램 참가자 모집</td>
                <td className="media">법보신문</td>
                <td className="date">2022.09.03</td>
              </tr>
              <tr>
                <td className="title">만불회, 정토회, 한마음 성공 비결은?</td>
                <td className="media">불교TV</td>
                <td className="date">2022.08.25</td>
              </tr>
              <tr>
                <td className="title">정토회 만일결사 9000일 회향을 지켜보며</td>
                <td className="media">불교신문</td>
                <td className="date">2022.08.24</td>
              </tr>
              <tr>
                <td className="title">위태로운 선생님들을 위한 스승님의 가르침</td>
                <td className="media">법보신문</td>
                <td className="date">2022.08.14</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default News;