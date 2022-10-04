import { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
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
  const [init, setInit] = useState();

  const parentPoint = useRef();
  const firstPoint = useRef();
  const secondPoint = useRef();
  const thirdPoint = useRef();
  const fourthPoint = useRef();

  const firstPhase = firstPoint.current;
  const secondPhase = secondPoint.current;
  const thirdPhase = thirdPoint.current;
  const fourthPhase = fourthPoint.current;

  const yearPhase = ['2019', '2014', '2004', '1994'];

  const scrollHandling = useCallback(() => {
    let list = [];
    for (let data of [firstPhase, secondPhase, thirdPhase, fourthPhase]) {
      list.push(window.scrollY + data.getBoundingClientRect().top)
    }
    bottomUp(list.reverse());
  }, [firstPhase, secondPhase, thirdPhase, fourthPhase, bottomUp])

  useEffect(() => {
    setInit(0);
    window.addEventListener('scroll', scrollHandling);
    return () => {
      window.removeEventListener('scroll', scrollHandling);
    }
  }, [init, scrollHandling])

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

  const [data, setData] = useState(0);
  const navRef = useRef();
  const navRef2 = useRef();
  const navRef3 = useRef();
  const navRef4 = useRef();


  const bottomUp = (data) => {
    setData(data);
  }

  const toScroll = (yValue) => {
    window.scrollTo({ left: 0, top: yValue, behavior: 'smooth' });
  }

  const classForeach = (elementArr, exceptionIdx) => {
    elementArr.forEach((el, idx) => idx !== exceptionIdx ? el.classList.remove('on') : null
    )
  }

  const scrollHandling = useCallback(() => {
    const refList = [navRef.current, navRef2.current, navRef3.current, navRef4.current];
    if (window.scrollY > data[3] && window.scrollY < data[2]) {
      navRef.current.classList.add('on');
      classForeach(refList, 0);
    } else if (window.scrollY > data[2] && window.scrollY < data[1]) {
      navRef2.current.classList.add('on');
      classForeach(refList, 1);
    } else if (window.scrollY > data[1] && window.scrollY < data[0]) {
      navRef3.current.classList.add('on');
      classForeach(refList, 2);
    } else if (window.scrollY > data[0]) {
      navRef4.current.classList.add('on');
      classForeach(refList, 3);
    }
  }, [data])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandling);
    return () => {
      window.removeEventListener('scroll', scrollHandling);
    }
  }, [data, scrollHandling])

  return (
    <div className="history_box">
      <ul className="navigation">
        {navList.map(it => {
          return (
            <li key={it.id} onClick={() => (toScroll(data[it.id - 1]))}  {...(it.id === 4 ? { ref: navRef } : it.id === 3 ? { ref: navRef2 } : it.id === 2 ? { ref: navRef3 } : it.id === 1 ? { ref: navRef4 } : {})}>{it.title}</li>
          )
        })}
      </ul>
      <Contents bottomUp={bottomUp} />
    </div >
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