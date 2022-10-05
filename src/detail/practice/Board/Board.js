import './Board.scss';

const BoardTemplate = () => {
  const theadList = ['번호', '제목', '작성자', '게시일자']
  return (
    <table>
      <thead>
        <tr>
          {theadList.map((it, idx) => {
            return (
              <th key={idx}>{it}</th>
            )
          })}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}

const Board = () => {
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
          <BoardTemplate />
        </div>
      </div>
    </section>
  )
}

export default Board;