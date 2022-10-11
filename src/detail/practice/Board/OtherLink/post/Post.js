import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { checkPwd } from "../../../../../funcSet/funcSet";
import { deleteData } from "../../../../../store/module/reviewSlice";
import './Post.scss';

const TitleSet = ({ data }) => {
  return (
    <div className="title_bar">
      <div className="top_info">
        <div className="post_info left">
          <h4>{data.title}</h4>
        </div>
        <div className="right">
          <span>작성자 : </span>
          <span>{data.author}</span>
        </div>
      </div>
      <div className="bottom_info">
        <ul className="info_list">
          <li>
            <strong className="info_title">게시글 번호 : </strong>
            <strong className="info">{data.id}</strong>
          </li>
          <li>
            <strong className="info_title">등록일자 : </strong>
            <strong className="info">{data.date}</strong>
          </li>
          <li>
            <strong className="info_title">이메일 : </strong>
            <strong className="info">{data.email}</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

const PostBody = ({ body }) => {
  return (
    <div className="post_body">
      {body.split('\n').map((it, idx) => {
        return (
          <p key={idx}>
            {it} <br />
          </p>
        )
      })}
    </div>
  )
}

const DenyModal = () => {
  return (
    <div className="deny_box">
      <em>비밀번호가 틀렸습니다!</em>
    </div>
  )
}

const CheckModal = ({ realPwd, setBool, type, id }) => {
  const pwdRef = useRef();
  const [updateDist, setUpdate] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goPage = (type) => {
    if (type === 'UPDATE') {
      navigate(`/mm_practice/reviewUpdate/${id}`);
    } else if (type === 'DELETE') {
      dispatch(deleteData(realPwd))
      navigate(`/mm_practice`);
    }
  }

  return (
    <div className="checkbox">
      <h4>비밀번호를 입력하세요</h4>
      <div className="check_pwd">
        <input type="password" ref={pwdRef} required />
        <button onClick={() => (checkPwd(pwdRef.current.value, realPwd) ? goPage(type) : setUpdate(false))}>확인</button>
      </div>
      <div className="close_box" onClick={() => (setBool(false))}>
        <i className="xi-close"></i>
      </div>
      {updateDist === false && <DenyModal />}
    </div>
  )
}

const Post = ({ postingData }) => {
  const [bool, setBool] = useState(false);
  const [type, setType] = useState('UPDATE');
  const params = useParams();
  const data = postingData[params.id - 1];
  return (
    <section className="post_view">
      {postingData[params.id - 1]
        ?
        <div className="container">
          <TitleSet data={data} />
          <PostBody body={data.contents} />
          <div className="btn_box">
            <Link to="/mm_practice" className="btn">목록으로</Link>
            <button to="#" className="btn" onClick={() => (setBool(true), setType('UPDATE'))}>수정하기</button>
            <button to="#" className="btn" onClick={() => (setBool(true), setType('DELETE'))}>삭제하기</button>
          </div>
          {bool ? <CheckModal realPwd={data.password} setBool={setBool} type={type} id={params.id} /> : null}
        </div> :
        <div>NONE</div>
      }
    </section>

  )
}

export default Post;