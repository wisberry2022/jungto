import './Header.scss'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyData } from '../store/module/loginSlice';

const TopInfo = () => {
  const logState = useSelector(state => state.login.logState);
  const location = useLocation();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('userState');
    dispatch(verifyData(localStorage.userState));
  }

  return (
    <div className="top_info">
      <div className="list_box">
        <ul className="left_info">
          {logState ? <Link to="#" className="box" onClick={() => (logOut())}>로그아웃</Link> : <Link to="/login" className="box" state={{ locate: location.pathname }}>로그인</Link>}
          <Link to="/" className="box">HOME</Link>
        </ul>
      </div>
    </div>
  )
}

const GNB = ({ menu }) => {
  const logState = useSelector(state => state.login.logState);
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
                            <Link to={sul.link} className="sub_list">{sul.title}</Link>
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
          <li>
            <Link to="">
              <i className="xi-search"></i>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="xi-message-o"></i>
            </Link>
          </li>
          <li>
            <Link to={logState ? "myPage" : "/login"} state={logState ? { locate: 'myPage' } : { locate: '../myPage' }}>
              <i className="xi-user-o"></i>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  )
}

const Header = () => {
  const multiMenu = [
    { id: 1, menu: '소개', sub_menu: [{ title: '정토회 소개', link: '' }, { title: '정토 소식', link: '' }, { title: '언론 속 정토', link: '' }, { title: '문의하기', link: '' }, { title: '월간정토', link: '/mm_intro/magazine' }], link: '/mm_intro' },
    { id: 2, menu: '정토불교대학', sub_menu: [{ title: '정토불교대학', link: '' }, { title: '정토경전대학', link: '' }, { title: '자주 묻는 질문', link: '' }], link: '/mm_college' },
    { id: 3, menu: '수련원', sub_menu: [{ title: '정토수련원 소개', link: '' }, { title: '수련일정 및 신청', link: '' }, { title: '오시는 길', link: '' }, { title: '수련문의', link: '' }, { title: '백일출가', link: '' }, { title: '깨달음의 장', link: '/mm_train/awakePlace' }, { title: '나눔의 장', link: '/mm_train/divide' }, { title: '명상', link: '' }, { title: '49일 문경살이', link: '/mm_train/templeStay' }, { title: '주말 문경살이', link: '/mm_train/weekend' }, { title: '바라지장', link: '' }, { title: '일상에서 깨어있기', link: '/mm_train/daysAwake' }], link: '/mm_train' },
    { id: 4, menu: '수행과 실천', sub_menu: [{ title: '수행과 실천 소개', link: '' }, { title: '정토행자의 하루', link: '' }, { title: '정토행자의 실천', link: '' }, { title: '실천장소 소개', link: '' }, { title: '108배 수행', link: '' }, { title: '천일결사 소개', link: '' }, { title: '천일결사 기도', link: '' }, { title: '수행법회', link: '' }, { title: '청년대학생', link: '' }, { title: '직능 모임', link: '' }, { title: '인도 성지순례', link: '' }, { title: '동북아역사기행', link: '' }], link: '/mm_practice' },
    { id: 5, menu: '법륜스님', sub_menu: [{ title: '법륜스님 소개', link: '' }, { title: '스님의 하루', link: '' }, { title: '즉문즉설', link: '' }], link: '/sangha' },
  ];

  return (
    <header className="header">
      <TopInfo />
      <h1>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="jungto" />
        </Link>
      </h1>
      <GNB menu={multiMenu} />
    </header>

  )
}

export default Header;