import './Practice.scss';
import { Link } from 'react-router-dom';


const SubBox = () => {
  return (
    <ul className="list">
      <Link to="/" className="box"><li><strong>함께 일구는 정토회</strong> <i className="xi-long-arrow-right"></i></li></Link>
      <Link to="/" className="box"><li><strong>환경활동</strong><i className="xi-long-arrow-right"></i></li></Link>
      <Link to="/" className="box"><li><strong>복지활동</strong><i className="xi-long-arrow-right"></i></li></Link>
      <Link to="/" className="box"><li><strong>통일 및 평화활동</strong><i className="xi-long-arrow-right"></i></li></Link>
    </ul>
  )
}

const Practice = () => {
  return (
    <section className="practice">
      <div className="container">
        <div className="intro_desc">
          <div className="title_box">
            <h3>정토행자의 실천</h3>
            <p>아름다운 세상을 위한 정토회의 따뜻한 움직임</p>
          </div>
          <div className="desc_box">
            <strong>
              수행과 실천
            </strong>
            <p className="f_desc">
              정토회는 나의 행복을 위해 수행하고<br />
              다른 이의 행복을 위해 보시, 봉사하는 수행자들이 함께 만들어나갑니다
            </p>
            <p className="s_desc">
              매일 아침 명상으로 나를 돌아보고 <br />
              일상에서는 알아차림으로 자유롭고 행복한 사람으로 나아갑니다
            </p>
          </div>
          <div className="sub_box">
            <h4>수행과 실천을 위한 활동</h4>
            <SubBox />
          </div>
        </div>
        <div className="intro_image">
          <figure className="bg_set itm01"></figure>
          <figure className="bg_set itm02"></figure>
          <figure className="bg_set itm03"></figure>
          <figure className="bg_set itm04"></figure>
        </div>
      </div>
    </section>
  )
}

export default Practice;