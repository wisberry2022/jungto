import { forwardRef, useEffect, useRef, useState } from 'react';
import './History.scss';
import { useSelector } from 'react-redux';

const TemplateContents = forwardRef((props, ref) => {
  const templateData = props.templateData;
  const yearPhase = ['2019', '2014', '2004', '1994'];

  return (
    <li className={yearPhase.includes(templateData.year) ? 'template scroll_point' : 'template'} ref={ref}>
      <div className="left_contents">
        {templateData.image ?
          <figure className={`bg_set history${templateData.imageNum}`}></figure> :
          <figure className="dump"></figure>
        }
      </div>
      <div className="right_contents">
        <h5>{templateData.year}</h5>
        <div className="month_active">
          {templateData.month.map((it, idx) => {
            return (
              <div className="detail_active" key={idx}>
                <strong>{it.month}</strong>
                <ul className="main_active">
                  {it.active.map((its, id) => {
                    return (
                      <li key={id}>{its}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

      </div>
    </li>
  )
})

const Contents = ({ bottomUp }) => {
  const parentPoint = useRef();
  const firstPoint = useRef();
  const secondPoint = useRef();
  const thirdPoint = useRef();
  const fourthPoint = useRef();

  const parentPhase = parentPoint.current;
  const firstPhase = firstPoint.current;
  const secondPhase = secondPoint.current;
  const thirdPhase = thirdPoint.current;
  const fourthPhase = fourthPoint.current;

  const yearPhase = ['2019', '2014', '2004', '1994'];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let list = [];
      for (let data of [firstPhase, secondPhase, thirdPhase, fourthPhase]) {
        list.push(window.scrollY + data.getBoundingClientRect().top)
      }
      bottomUp(list);
    })
  }, [parentPhase, firstPhase, secondPhase, thirdPhase, fourthPhase])

  const historyData = useSelector(state => state.history);

  return (
    <div className="contents">
      <figure className="bg_set logo"></figure>
      <ul className="history_box" ref={parentPoint}>
        {historyData.map((it, idx) => {
          return <TemplateContents key={it.id} templateData={it}
            {...(yearPhase.includes(it.year) ? it.year === '2019' ? { ref: firstPoint } : it.year === '2014' ? { ref: secondPoint } : it.year === '2004' ? { ref: thirdPoint } : it.year === '1994' ? { ref: fourthPoint } : {} : {})}
          />
        })}
      </ul>
    </div>
  )
}

const HistoryBox = () => {
  const navList = [
    { id: 1, title: '1985 ~ 1994' },
    { id: 2, title: '1995 ~ 2004' },
    { id: 3, title: '2005 ~ 2014' },
    { id: 4, title: '2015 ~ 현재' },
  ];
  const [num, setNum] = useState(4);
  const [data, setData] = useState(0);

  const bottomUp = (data) => {
    setData(data);
  }

  return (
    <div className="history_box">
      {console.log(data)}
      <ul className="navigation">
        {navList.map(it => {
          return (
            <li key={it.id} onClick={() => (setNum(it.id))} className={num === it.id ? 'on' : ''}>{it.title}</li>
          )
        })}
      </ul>
      <Contents bottomUp={bottomUp} />
    </div>
  )
}

const History = () => {
  return (
    <section className="history">
      <div className="container">
        <div className="title_box">
          <h3>정토역사</h3>
          <p>맑은 마음, 좋은 벗, 깨끗한 땅을 실현하는 정토회의 30년간의 기록</p>
        </div>
        <HistoryBox />
      </div>
    </section>
  )
}

export default History;