import './Denomination.scss';

const Left = () => {
  return (
    <div className="left">
      <div className="semi_title">
        <h4>
          정토회는 이웃과 세상에 보탬이 되는 삶을 지향하는 수행공동체입니다.
        </h4>
        <p className="phase">
          <span>개인은 행복하고, 사회는 평화로우며, 자연은 아름다운 정토세상</span>을 <br />
          만드는 것이 정토회의 설립취지입니다.
        </p>
        <p className="phase">
          정토세상을 만들기 위해 스스로는 자기인생의 주인으로 행복한 삶을 살고, <br />
          단순하고 소박한 삶을 지향하며 하나 뿐인 지구를 살리는 환경활동,<br />
          나와 이웃이 함께 행복한 세상을 만들기 위한 복지활동, 한반도 통일과<br />
          세계평화를 위한 <span>다양한 활동을 전개해나가며 행복을 널리 전하고 있습니다.</span><br />
        </p>
      </div>
    </div>
  )
}

const Right = () => {
  return (
    <div className="right">
      <figure className="bg_set"></figure>
    </div>
  )
}

const Denomination = () => {
  return (
    <section className="denomination_intro">
      <div className="container">
        <div className="title_box">
          <h3>
            정토회 소개
          </h3>
          <p>정토회를 소개합니다</p>
        </div>
        <div className="desc_box">
          <Left />
          <Right />
        </div>
      </div>
    </section>
  )
}

export default Denomination;