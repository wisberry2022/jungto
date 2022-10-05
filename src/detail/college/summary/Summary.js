import './Summary.scss';
import { Link } from 'react-router-dom';

const Summary = () => {
  const stepList = [
    { id: 1, title: '영상강의', desc: '정해진 기간에 영상강의를 시청합니다', btn: '영상강의 참여 방법 보기' },
    { id: 2, title: '마음나누기', desc: '강의를 주제로 참가자들과 마음나누기를 합니다', btn: '마음나누기란?' },
    { id: 3, title: '수행연습', desc: '강의에서 배운 내용을 일상에서 실천하고 내것으로 만듭니다', btn: '수행연습은 어떻게 하나요?' },
  ];
  return (
    <section className="summary">
      <div className="container">
        <div className="semi_title">
          <h4>어떻게 진행되나요?</h4>
          <p>
            정토불교대학의 수업은 <span>법륜스님의 영상강의, 마음 나누기, 수행연습 3가지로 구성</span>되어 있습니다.<br />
            그리고 정토불교대학만의 특별한 프로그램으로, 즉문즉설과 실천활동이 있습니다.
          </p>
        </div>
        <ul className="step_box">
          {stepList.map(it => {
            return (
              <li key={it.id} className="step_desc">
                <h5>{it.title}</h5>
                <div className="icon_box">
                  <figure className={`bg_set icon0${it.id}`}></figure>
                </div>
                <p>{it.desc}</p>
                <Link to="#" className="btn">{it.btn}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Summary;