import './Board.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE } from '../../../store/module/reviewSlice';
import { useEffect } from 'react';
import axios from 'axios';

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

const Board = () => {

  // store에 접근하여 postingData에 전체 데이터를 가져옴
  const postingData = useSelector(state => state.review);
  const dispatch = useDispatch();

  useEffect(() => {
    // DB에 직접 접근
    axios.get('/mm_practice')
      .then((res) => (dispatch(UPDATE(res.data))));

    // const exam = [
    //   {
    //     "_id": {
    //       "$oid": "6340a5d5e6a290dfcba72877"
    //     },
    //     "title": "감사합니다!",
    //     "author": "왕인서",
    //     "email": "ground444@naver.com",
    //     "password": "103030200",
    //     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
    //     "date": "2022-10-08",
    //     "__v": 0
    //   },
    //   {
    //     "_id": {
    //       "$oid": "6340a5d5e6a290dfcba72877"
    //     },
    //     "title": "수고하셨습니다!",
    //     "author": "김주은",
    //     "email": "ground444@naver.com",
    //     "password": "103030200",
    //     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
    //     "date": "2022-10-08",
    //     "__v": 0
    //   },
    //   {
    //     "_id": {
    //       "$oid": "6340a5d5e6a290dfcba72877"
    //     },
    //     "title": "수행5일차",
    //     "author": "오창석",
    //     "email": "ground444@naver.com",
    //     "password": "103030200",
    //     "contents": "수행과 실천 2일차~\n넘 좋아요~ 여러분들도 하세요!",
    //     "date": "2022-10-08",
    //     "__v": 0
    //   },
    // ];

    // dispatch(UPDATE(exam));

  }, [dispatch])



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