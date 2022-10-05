import { Link } from 'react-router-dom';
import './Intro.scss';

const Intro = () => {
  return (
    <section className="college_intro">
      <div className="container">
        <div className="title_box">
          <h3>정토불교대학</h3>
          <p>
            인생을 좀 더 행복하고 자유롭게 사는 법을<br />
            부처님의 가르침을 통해 배우는 곳입니다.
          </p>
        </div>
        <div className="active_box">
          <div className="active_title">
            <h4>정토불교대학 활동사진</h4>
            <Link to="#" className="btn">활동 더 보기</Link>
          </div>
          <div className="img_box">
            {Array.from({ length: 3 }, (v, k) => k + 1).map((it) => {
              return (
                <figure className={`bg_set img0${it}`} key={it}></figure>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;