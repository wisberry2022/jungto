import './Intro.scss';

const Intro = () => {
  const introList = [
    { id: 1, title: '수행공동체', desc: ['정토수련원은 정토행자들의 수행공동체입니다. 정토행자들은 수행을 통해 자신의 괴로움을 해결하고 세상을 위해 봉사하는 삶을 삽니다', '개인의 삶을 바꾸는 수행과 사회를 바꾸는 일이 다르지 않음을 알고, 일과 수행의 통일을 지향합니다.'] },
    { id: 2, title: '생태 공동체', desc: ['정토수련원에서는 검소하고 자연친화적인 생활을 추구합니다. 환경을 오염시키는 일회용품이나 세제를 사용하지 않고, 음식물 쓰레기 제로를 지향합니다.', '생태 뒷간에서 나온 퇴비를 이용해, 자연의 정화 능력을 넘지 않는 순환적인 생활을 합니다.'] },
    { id: 3, title: '생산 공동체', desc: ['정토수련원은 유기농법으로 건강한 먹거리를 생산하여 자연과 사람을 해치지 않는 삶을 추구합니다.', '상주하는 공동체 구성원과 수련 참가자들의 먹거리를 모두 직접 생산하는 것을 지향합니다.'] },
  ];
  return (
    <section className="train_intro">
      <div className="container">
        <div className="title_box">
          <h3>정토수련원 소개</h3>
          <p>새로운 인간, 새로운 문명을 위한 수행 · 생태 · 생산 공동체</p>
        </div>
        <figure className="bg_set"></figure>
        <ul className="intro_list">
          {introList.map(it => {
            return (
              <li key={it.id}>
                <h5>
                  {it.title}
                </h5>
                <ul className="sub_list">
                  {it.desc.map((it, idx) => {
                    return <li key={idx}>{it}</li>
                  })}
                </ul>
              </li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}

export default Intro;