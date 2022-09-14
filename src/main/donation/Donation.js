import "./Donation.scss";
import "slick-carousel/slick/slick.css";
// import Slider from "react-slick";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h4>후원하기</h4>
      <form action="#!" method="GET">
        <div className="name_ip">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" placeholder="성함을 입력하세요" />
        </div>
        <div className="email_ip">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력하세요" />
        </div>
        <div className="hp_ip">
          <label htmlFor="phone">전화번호</label>
          <input type="text" id="phone" placeholder="전화번호를 입력하세요" />
        </div>
        <div className="check_box">
          정기후원
          <input type="radio" name="donate" />
          일시후원
          <input type="radio" name="donate" />
        </div>
        <div className="btn_box">
          <button type="submit">제출하기</button>
          <button type="button">후원현황</button>
        </div>
      </form>
    </div>
  );
};

const RightSlide = () => {
  return (
    <div className="donate_slider">
      <div className="donate_desc">
        <figure className="bg_set itm01"></figure>
        <strong>식량지원</strong>
        <p>
          먹을 것이 없어 굶주림에 고통받고 있는
          <br />
          사람들에게 식량을 지원합니다
        </p>
      </div>
      <div className="donate_desc">
        <figure className="bg_set itm02"></figure>
        <strong>의료지원</strong>
        <p>
          병원이 없고 돈도 없어서
          <br />
          아픈 사람들을 위해 병원을 짓고
          <br />
          무상의료를 제공합니다
        </p>
      </div>
      <div className="donate_desc">
        <figure className="bg_set itm03"></figure>
        <strong>교육지원</strong>
        <p>
          문명의 혜택에서 소외된 아이들에게
          <br />
          최소한의 문맹극복을 원칙으로
          <br />
          학교를 운영하고, 학용품 등을 지원합니다
        </p>
      </div>
      <div className="donate_desc">
        <figure className="bg_set itm04"></figure>
        <strong>학교건축</strong>
        <p>
          문명의 혜택에서 소외된 사람들이
          <br />
          교육받을 수 있도록 학교를 짓고
          <br />
          오래된 곳은 보수합니다
        </p>
      </div>
    </div>
  );
};

const Contents = () => {
  return (
    <div className="contents">
      <div className="container clearfix">
        <Subscribe />
        <RightSlide />
      </div>
    </div>
  );
};

const Donation = () => {
  return (
    <section className="donation">
      <div className="title_box">
        <h3>정토회 후원</h3>
        <p>정토회는 도움을 필요로 하는 사람들을 지나치지 않습니다</p>
      </div>
      <Contents />
    </section>
  );
};

export default Donation;
