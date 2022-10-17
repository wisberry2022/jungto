import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Center.scss';

const Template = ({ templateData }) => {
  return (
    <div className={templateData.id % 2 === 0 ? 'center_intro even' : 'center_intro'}>
      <figure className={`left bg_set place0${templateData.id}`}></figure>
      <div className="right">
        <h5>{templateData.title}</h5>
        <div className="phase_box">
          {templateData.desc.map((it, idx) => {
            return (
              <p key={idx} className="phase">{it}</p>
            )
          })}
        </div>
        {templateData.locate_flag && <Link to={`locate/${templateData.id}`} className="btn">오시는 길</Link>}
      </div>
    </div>
  )
}

const Center = () => {
  const centerList = useSelector(state => state.train);

  return (
    <section className="center">
      <div className="container">
        <div className="semi_title">
          <h4>수련원 소개</h4>
          <p>정토회에서 운영하는 수련원을 소개합니다.</p>
        </div>
        <div className="center_intro_box">
          {centerList.map(it => {
            return (
              <Template key={it.id} templateData={it} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Center;