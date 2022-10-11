import './Board.scss';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

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
  const [divideNum, setDivide] = useState(6);
  const [divideListNum, setListNum] = useState(3);
  const [pageNum, setPage] = useState([0, divideNum]);
  const [listNum, setList] = useState([0, divideListNum]);
  const listRef = useRef();

  const toPrev = () => {
    setPage(prev =>
      [...prev.map(it => { return it - divideNum })]
    )
  }

  const toNext = () => {
    setPage(prev =>
      [...prev.map(it => { return it + divideNum })]
    )
  }

  const toIdx = (idx) => {
    setPage(
      [0, divideNum].map(it => it + (divideNum * idx))
    )
  }

  return (
    <>
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
            }).reverse().slice(pageNum[0], pageNum[1])
            : <NoneDisplay />}
        </tbody>
      </table >
      {postingData.length > 0 ?
        <ul className="page_index">
          <li className="prev" onClick={() => (pageNum[0] ? toPrev() : null)}>
            <i className="xi-angle-left"></i>
          </li>
          {Array.from({ length: Math.ceil(postingData.length / divideNum) }, (v, k) => k + 1).map((it, idx) => {
            return (
              <li key={idx} onClick={() => (toIdx(idx))} ref={listRef}>
                {it}
              </li>
            )
          }).slice(listNum[0], listNum[1])}
          <li className="next" onClick={() => (pageNum[1] < postingData.length ? toNext() : null)}>
            <i className="xi-angle-right"></i>
          </li>
        </ul>
        : null}
    </>
  )
}

const Board = ({ postingData }) => {
  return (
    <section className="board">
      <div className="container">
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