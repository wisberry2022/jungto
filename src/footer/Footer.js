import './footer.scss';
import { Link } from 'react-router-dom';


const TopFooter = () => {

  const list_arr = ['월간정토', '실천장소 소개', '삼보수호비', '기부금영수증'];

  return (
    <div className="top_ft">
      <div className="container">
        <ul className="top_list">
          {list_arr.map((el, idx) => (
            <Link to="/" className="list" key={idx}><li key={idx}><span>{el}</span><i className="xi-angle-right"></i></li></Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

const BottomFooter = () => {
  const mini_list = ['개인정보 처리방침', '전화번호안내', '오시는 길'];
  const sns_list = ['xi-facebook-official', 'xi-twitter', 'xi-instagram'];

  return (
    <div className="bottom_ft">
      <div className="container">
        <h1>
          <Link to="/">
            <img src="./logo.png" alt="hello" />
          </Link>
        </h1>
        <ul className="info">
          {mini_list.map((elm, idx) => (
            <Link to="/" className="info_list" key={idx}><li key={idx}>{elm}</li></Link>
          ))}
        </ul>
        <div className="bottom_list">
          <p>
            정토회 홈페이지의 모든 콘텐츠에 대한 저작권은 정토회에 있습니다.<br />
            무단도용 및 2차 가공, 복제, 공중송신 등을 금지하며 저작권 침해 시 민,형사상 책임이 따를 수 있음을 알려드립니다.
          </p>
          <ul className="sns_set">
            {sns_list.map((el, idx) => (
              <Link to="/" className="sns_icon" key={idx}><li key={idx}><i className={el}></i></li></Link>
            ))}
          </ul>
        </div>
        <span>Copyright&copy; jungto Order of Korean Buddhism All right reserved.</span>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <TopFooter />
      <BottomFooter />
    </footer>
  )
}

export default Footer;