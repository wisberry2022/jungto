import './Intro.scss';

const SanghaIntro = () => {

  const sangha_intro = [
    {
      title: '출생',
      desc: '1953년 울산광역시',
    },
    {
      title: '소속',
      desc: '평화재단(이사장)',
    },
    {
      title: '수상',
      desc: '2020년 제37회 니와노평화상',
    },
    {
      title: '수상',
      desc: '2011년 제6회 통일문화대상',
    },
  ]

  return (
    <div className="intro_box clearfix">
      <div className="left">
        <div className="desc">
          <strong>
            법륜스님은 평화와 화해의 메세지를 전하는<br />
            평화운동가입니다
          </strong>
          <p className="color">
            제3세계를 지원하는 구호 활동가이며,<br />
            인류의 문명 전환을 실현해가는 사상가이자 깨어있는 선승으로,<br />
            보살의 삶을 서원한 수행공동체 '정토회'를 세웠습니다.
          </p>
          <p>
            부처의 가르침을 일상에서 실천하는 수행을 바탕으로 한발 더 나아가<br />
            사회 변화를 도모해 왔으며, 이러한 정신은 인도 불가촉천민 마을에<br />
            학교와 병원을 열고, 이어서 굶주리는 북한 동포 돕기 운동과 <br />
            통일운동을 전개하는 원천이 되었습니다.
          </p>
          <p>
            2002년부터 즉문즉설(卽問卽說)을 통해 세대를 넘나드는 인생의 멘토가<br />
            되어, 괴로움이 없고 자유로운 삶, 이웃과 세상에 보탬이 되는 삶을 나누고 있습니다. <br />
          </p>
        </div>
        <h3>약력</h3>
        <ul className="sangha">
          {sangha_intro.map((el, idx) => (
            <li key={idx}><span className="title">{el.title}</span><span className="contents">{el.desc}</span></li>
          ))}
        </ul>
      </div>
      <figure className="bg_set right"></figure>
    </div>
  )
}

const Intro = () => {
  return (
    <section className="Intro">
      <div className="container">
        <h2 className="d_title">법륜스님 소개</h2>
        <SanghaIntro />
      </div>
    </section>
  )
}

export default Intro;