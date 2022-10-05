import { Link } from 'react-router-dom';
import './Curriculum.scss';

const TemplateBox = ({ studyList }) => {
  return (
    <div className="template_box">
      <h5>{studyList.title}</h5>
      <ul className="desc_list">
        {studyList.desc.map((it, idx) => {
          return (
            <li key={idx}>{it}</li>
          )
        })}
      </ul>
    </div>
  )
}

const Prelude = () => {
  const studyList = [
    { id: 1, title: '첫째, "수행으로서의 불교는 무엇인가"를 공부합니다.', desc: ['부처님이 깨달음을 얻은 이후 45년 동안 세상에 전했던 가르침인 불교의 근본적인 사상을 공부합니다.', '수행으로서의 불교가 종교나 철학으로서의 불교와 어떻게 다른지 비교할 수 있습니다.'] },
    { id: 2, title: '둘째, 부처님의 삶을 공부합니다.', desc: ['현대 사회에 부처님이 오신다면 어떤 삶의 모습일까, 무엇을 깨달았고, 어떻게 사람들을 괴로움 없이 살아가도록 이끌었을까를 공부합니다'] },
    { id: 3, title: '셋째, 불교의 철학적 요소인 불교 사상을 일상에 적용하는 살아있는 공부를 합니다.', desc: ['부처님은 깨달음을 얻은 이후 45년 동안 매우 검소하고 겸손하게 사셨습니다.', '팔만대장경에 달하는 부처님 가르침의 요지를 정리해 놓은 불교의 근본 사상을 공부합니다.'] },
  ];

  return (
    <div className="prelude">
      <figure className="bg_set"></figure>
      <ul className="prelude_list">
        {studyList.map(it => {
          return (
            <li key={it.id}>
              <TemplateBox studyList={it} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const InformalCurriculum = () => {
  const informalList = [
    { id: 1, subject: '실천적불교사상', desc: '마음작용의 원리를 배우고 생활속에서 실천하며 괴로움에서 벗어나는 체험을 할 수 있다.' },
    { id: 2, subject: '인간붓다', desc: '구체적인 역사 속에서 살아간 한 인간으로서 부처님을 이해하고, 우리 삶의 멘토로서 자리매김 할 수 있도록 한다.' },
    { id: 3, subject: '불교와 사회', desc: '부처님의 가르침으로 보는 환경, 복지, 평화 이야기' },
    { id: 4, subject: '즉문즉설', desc: '과목별로 직접 질문으로 의문을 해소하는 시간' },
    { id: 5, subject: '수행맛보기', desc: '일상에서 깨어 수행할 수 있는 실습시간' },
    { id: 6, subject: '실천활동(오프라인)', desc: '지역 또는 공통의 주제를 가지고 실천하는 시간' },
  ];
  return (
    <div className="informal">
      <table>
        <thead>
          <tr>
            <th>교과</th>
            <th>세부내용</th>
          </tr>
        </thead>
        <tbody>
          {informalList.map(it => {
            return (
              <tr key={it.id}>
                <td className="subject">{it.subject}</td>
                <td className="desc">{it.desc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Link to="#" className="btn">교과과정 보기</Link>
    </div>
  )
}

const Curriculum = () => {
  return (
    <section className="curriculum">
      <div className="container">
        <div className="semi_title">
          <h4>무엇을 배우나요?</h4>
          <p>정토불교대학의 교과과정을 확인해보세요</p>
        </div>
        <Prelude />
        <InformalCurriculum />
      </div>
    </section>
  )
}

export default Curriculum;