import './CiIntro.scss';

const CiIntro = () => {
  return (
    <section className="ci_intro">
      <div className="container">
        <div className="title_box">
          <h3>
            정토회 CI
          </h3>
          <p className="phase">
            정토회 CI는 일과 수행의 조화를 통해 정토세상을 만들겠다는 의지를 표현하고, 화합과 상생을 실현하기 위한 <span>'신뢰와 대안'</span>을 상징합니다.<br />
            정토회 로고는 수행을 바탕으로 한 사회참여를 연꽃으로 형상화하고 있습니다. 8장의 연꽃잎은 팔정도를 나타내며, 꽃잎 사이의 둥근 원은 지구를 상징합니다.
          </p>
        </div>
        <figure className="bg_set"></figure>
      </div>
    </section>
  )
}

export default CiIntro;