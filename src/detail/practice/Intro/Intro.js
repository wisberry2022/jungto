import './Intro.scss';

const Intro = () => {
  const introList = [
    { id: 1, title: '함께 일구는 정토회', desc: '국내와 해외의 정토법당 운영을 비롯하여 교육, 행사, 강연 등 행복을 전하는 다양한 활동은 대가를 바라지 않는 자원봉사로 운영합니다' },
    { id: 2, title: '환경활동', desc: '단순하고 소박한 삶을 지향하며 하나뿐인 지구를 살리는 환경 실천을 생활화 합니다. 환경 학교, 빈 그릇 운동, 지렁이를 이용한 음식물쓰레기 퇴비화 등을 통해 쓰레기 제로 운동을 실천합니다' },
    { id: 3, title: '복지활동', desc: '제3세계의 기아·질병·문맹퇴치를 위한 모금 활동과 국내·외 취약계층 지원 등 복지활동을 통해 나와 이웃이 함께 행복한 세상을 만들어갑니다.' },
    { id: 4, title: '통일 및 평화활동', desc: '한반도 평화와 통일을 위한 다양한 활동 및 남과 북의 주민이 서로를 이해하는 새터민 지원 사업과 통일역사교육 등을 진행합니다.' },
  ];

  return (
    <section className="practice_intro">
      <div className="container">
        <div className="title_box">
          <h3>수행과 실천 소개</h3>
          <p>
            정토회는 나의 행복을 위해 수행하고 다른 이의 행복을 위해 보시, 봉사하는 수행자들이 <br />
            함께 만들어갑니다. 매일 아침 108배와 명상을 통해 나를 돌아보고 일상에서는 알아차림으로 <br />
            자유롭고 행복한 사람으로 나아갑니다.
          </p>
        </div>
        <ul className="practice_desc_list">
          {introList.map(it => {
            return (
              <li key={it.id}>
                <figure className={`bg_set itm0${it.id}`}></figure>
                <div className="desc_box">
                  <strong>{it.title}</strong>
                  <p>{it.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Intro;