import './MainVisual.scss'
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";


const SubInfo = () => {
  return (
    <ul className="sub_info">
      <li className="college">
        <strong>
          정토불교대학
        </strong>
        <p>
          삶을 바꾸는 공부
        </p>
        <Link to="/" className="btn">입학신청</Link>
        <figure className="bg_set icon01"></figure>
      </li>
      <li className="jts">
        <strong>
          JTS
        </strong>
        <p>
          세상을 위한 작은 움직임
        </p>
        <Link to="/" className="btn">봉사신청</Link>
        <figure className="bg_set icon02"></figure>
      </li>
      <li className="sns">
        <strong>
          즉문즉설
        </strong>
        <p>
          행복을 찾는 질문
        </p>
        <Link to="/" className="btn">청강신청</Link>
        <figure className="bg_set icon03"></figure>
      </li>
    </ul>
  );
}

const MainSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false
  };
  return (
    <div className="main_slider">
      <Slider {...settings}>
        <figure className="bg_set itm01">
          <div className="slogan_box">
            <h2>
              내 안에서 행복을 찾는 방법<br />
              법륜스님의 즉문즉설
            </h2>
            <p>내 안에 있는 행복을 찾을 수 있습니다</p>
            <Link to="/" className="btn">더 보기</Link>
          </div>
        </figure>
        <figure className="bg_set itm02">
          <div className="slogan_box">
            <h2>
              법륜스님과 함께하는 하계 템플스테이
            </h2>
            <p>한 달 동안 사찰 생활을 체험할 수 있습니다</p>
            <Link to="/" className="btn">더 보기</Link>
          </div>
        </figure>
        <figure className="bg_set itm03">
          <div className="slogan_box">
            <h2>
              온라인 한가위 명상
            </h2>
            <p>지금, 여기, 오직 나에게 오롯이 깨어있기</p>
            <Link to="/" className="btn">더 보기</Link>
          </div>
        </figure>
      </Slider>
      <SubInfo />
    </div>
  )
}

const MainVisual = () => {
  return (
    <>
      <section className="main_visual">
        <MainSlider />
      </section>
    </>

  )
}

export default MainVisual;