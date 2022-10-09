import './Board.scss';
import { Link } from 'react-router-dom';

const NoneDisplay = () => {
  return (
    <tr>
      <td className="none_display">
        <div className="display_set">
          <div className="img_box">
            <img src="./board_icon.png" alt="jungto" />
          </div>
          <h5>아무 게시글도 등록되어 있지 않습니다</h5>
        </div>
      </td>
    </tr>
  )
}

const BoardTemplate = ({ postingData }) => {
  const theadList = ['번호', '제목', '작성자', '게시일자'];
  const theadClassList = ['num', 'title', 'author', 'date'];

  return (
    <table>
      <thead>
        <tr>
          {theadList.map((it, idx) => {
            return (
              <th key={idx} className={theadClassList[idx]}>{it}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {postingData.length > 0 ?
          postingData.map(it => {
            return (
              <tr key={it.id}>
                <td className="num">{it.id}</td>
                <td className="title"><Link to={`/mm_practice/post/${it.id}`}>{it.title}</Link></td>
                <td className="author">{it.author}</td>
                <td className="date">{it.date}</td>
              </tr>
            )
          })
          : <NoneDisplay />}
      </tbody>

    </table >
  )
}

const Board = ({ postingData }) => {
  return (
    <section className="board">
      <div className="container">
        {/* {console.log(`boardJs 내부!:`, examData)} */}
        <div className="semi_title">
          <h4>실천 기록장</h4>
          <p>
            수행과 실천을 먼저 체험한 수행자들의 후기를 확인할 수 있습니다
          </p>
        </div>
        <div className="board_box">
          <strong>게시판</strong>
          <BoardTemplate postingData={postingData} />
          <Link to="/mm_practice/reviewRegister" className="btn">
            <figure className="bg_set icon"></figure>
            <span>글쓰기</span>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Board;