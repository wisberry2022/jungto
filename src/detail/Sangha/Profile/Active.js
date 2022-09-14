const CurrentActive = ({ appointData }) => {
  return (
    <div className="current_active active_cm">
      <div className="container">
        <h3 className="d_title">현재</h3>
        <div className="intro">
          <ul className="appoint">
            {appointData.map((el, idx) => (
              <li key={idx}>{el.contents}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Prize = ({ prizeData }) => {
  return (
    <div className="prize active_cm">
      <div className="container">
        <h3 className="d_title">수상</h3>
        <div className="awarding">
          <ul className="prize_list">
            {prizeData.map((el, idx) => (
              <li key={idx}>
                <span className="year">{el.year}</span>
                <span className="content">{el.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const MainActive = ({ activeData }) => {
  return (
    <div className="main_active active_cm">
      <div className="container">
        <h3 className="d_title">
          주요활동
        </h3>
        {activeData.map((el, idx) => {
          return (
            <div className="active_box" key={idx}>
              <h4 className="m_title">{el.title}</h4>
              <ul className="ma_list">
                {el.contents.map((sel, id) => (
                  <li key={id}>{sel}</li>
                ))}
              </ul>
            </div>
          )
        })}

      </div>
    </div >
  )
}

const Active = (props) => {
  const { activeData, prizeData, appointData } = props;
  return (
    <div className="Active">
      <h2 className="sub_title">
        법륜스님 활동
      </h2>
      <CurrentActive appointData={appointData} />
      <Prize prizeData={prizeData} />
      <MainActive activeData={activeData} />
    </div>
  )
}

export default Active;