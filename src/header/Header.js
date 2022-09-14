import './Header.scss'
import { Link, NavLink } from 'react-router-dom';

const TopInfo = () => {
  return (
    <div className="top_info">
      <div className="list_box">
        <ul className="left_info">
          <Link to="/login" className="box">회원가입</Link>
          <Link to="/sitemap" className="box">사이트맵</Link>
        </ul>
        <ul className="right_info">
          <Link to="/eng" className="box">ENG</Link>
          <Link to="/" className="box">HOME</Link>
        </ul>
      </div>
    </div>
  )
}

const GNB = ({ menu }) => {

  return (
    <nav className="gnb">
      <div className="top_menu">
        <ul className="main_menu">
          {menu.map((el, idx) => {
            return (
              <li key={idx} className="main_list">
                <NavLink to={el.link} activeclassname="active">{el.menu}</NavLink>
                <div className="main_box">
                  <div className="sub_box">
                    <strong>{el.menu}</strong>
                    <ul className="sub_menu">
                      {el.sub_menu.map((sul, id) => {
                        return (
                          <li key={id} className="sub_list">
                            <Link to="" className="sub_list">{sul}</Link>
                          </li>
                        )
                      })}
                    </ul>
                    <figure className={`bg_set itm0${idx + 1}`}></figure>
                  </div>
                </div>
              </li>
            )
          })}

        </ul>
        <div className="side_menu">
          <li><i className="xi-search"></i></li>
          <li><i className="xi-message-o"></i></li>
          <li><i className="xi-bars"></i></li>
        </div>
      </div>
    </nav>
  )
}

const Header = () => {
  const multi_menu = [
    { id: 1, menu: '소개', sub_menu: ['정토회 소개', '정토 소식', '언론 속 정토', '문의하기'], link: '/mm_intro' },
    { id: 2, menu: '정토불교대학', sub_menu: ['정토불교대학', '정토경전대학', '자주 묻는 질문'], link: '/mm_college' },
    { id: 3, menu: '수련원', sub_menu: ['정토수련원 소개', '수련일정 및 신청', '오시는 길', '수련문의', '백일출가', '깨달음의 장', '나눔의 장', '명상', '49일 문경살이', '주말 문경살이', '바라지장', '일상에서 깨어있기'], link: '/mm_train' },
    { id: 4, menu: '수행과 실천', sub_menu: ['수행과 실천 소개', '정토행자의 하루', '정토행자의 실천', '실천장소 소개', '108배 수행', '천일결사 소개', '천일결사 기도', '수행법회', '청년대학생', '직능 모임', '인도 성지순례', '동북아역사기행'], link: '/mm_practice' },
    { id: 5, menu: '법륜스님', sub_menu: ['법륜스님 소개', '스님의 하루', '즉문즉설'], link: '/sangha' },
  ];

  return (
    <header className="header">
      <TopInfo />
      <h1>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="hello" />
        </Link>
      </h1>
      <GNB menu={multi_menu} />
    </header>

  )
}

export default Header;