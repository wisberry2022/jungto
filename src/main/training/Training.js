import './training.scss';
import { useState } from 'react';

const Awakening = () => {
  return (
    <div className="train_desc">
      <h4>깨달음의 장</h4>
      <figure className="bg_set itm01"></figure>
      <strong>괴로움이 없는 사람, 자유로운 사람이 되는 길, 깨달음의 장을 통해 만나보세요</strong>
      <p>
        <span>깨달음의 장</span>은 괴로움이 없는 사람, 자유로운 사람이 되는 길을 안내하는 수련입니다<br />
        살다 보면 행복하기 위해 선택한 것들이 되려 나를 괴롭히고 있다고 느낄 때가 있습니다<br />
        학교, 직장, 육아, 결혼 등 내가 선택하고 내가 만들었던 것에 갇혀 있는 듯 합니다<br />
        <span>깨달음의 장</span>은 지금까지 한 번도 경험하지 못했을 새로운 삶의 세계로 당신을 안내합니다
      </p>
      <div className="btn_box">
        <button className="btn">
          활동 정보 및 일정
        </button>
        <button className="btn">
          신청하기
        </button>
      </div>
    </div>
  )
}
const Divide = () => {
  return (
    <div className="train_desc">
      <h4>나눔의 장</h4>
      <figure className="bg_set itm02"></figure>
      <strong>자신을 사랑하고, 자유롭고 평화로운 인간관계를 경험하고 그렇게 우리는 항상 행복하고자 합니다</strong>
      <p>
        <span>나눔의 장</span>은 스스로 자신과 인간관계로부터 자유로워지는 체험을 할 수 있는 수련입니다<br />
        우리는 항상 행복하고자 하지만 인간관계 속에서 마주하는 부정적인 감정에서 벗어나지 못합니다<br />
        <span>나눔의 장</span>은 자신을 사랑할 수 있고 인간관계가 평화로워지는 수련입니다
      </p>
      <div className="btn_box">
        <button className="btn">
          활동 정보 및 일정
        </button>
        <button className="btn">
          신청하기
        </button>
      </div>
    </div>
  )
}
const Mk = () => {
  return (
    <div className="train_desc">
      <h4>49살 문경살이</h4>
      <figure className="bg_set itm03"></figure>
      <strong>내 마음을 알아가는 시간, 자신과 사람에 대해 이해하는 시간</strong>
      <p>
        <span>49살 문경살이</span>는 49일 동안 문경 정토순련원에서 바라지, 공동체 체험을 하며 출가 행자로 살아보는 프로그램입니다<br />
        문경 정토수련원 대중들과 새벽예불, 발우공양을 시작으로 하루를 시작합니다<br />
        하루의 일상은 몸을 써서 바라지를 하며 잘 쓰이는 사람이 되어가는 과정입니다<br />
        소심경, 예불문 등 학습을 하고 법사님과의 상담을 통해 내 마음을 알아차리고 가벼워지는 시간이 함께합니다
      </p>
      <div className="btn_box">
        <button className="btn">
          활동 정보 및 일정
        </button>
        <button className="btn">
          신청하기
        </button>
      </div>
    </div>
  )
}
const Wmk = () => {
  return (
    <div className="train_desc">
      <h4>주말 문경살이</h4>
      <figure className="bg_set itm04"></figure>
      <strong>일상에서 잠시 벗어나, 내 마음을 알아차리는 시간</strong>
      <p>
        <span>주말 문경살이</span>는 주말 동안 문경 정토순련원에서 바라지, 공동체 체험을 하며 출가 행자로 살아보는 프로그램입니다<br />
        문경 정토수련원 대중들과 새벽예불, 발우공양을 시작으로 하루를 시작합니다<br />
        하루의 일상은 몸을 써서 바라지를 하며 잘 쓰이는 사람이 되어가는 과정입니다<br />
        정토수련원의 대중들과 함께 생활하는 <span>1박 2일 문경살이</span>는 잠시 일상에서 벗어나 자연 속에서 마음을 쉬며<br />
        도반들과 땀 흘려 일하는 가운데 내 마음을 알아차리는 시간입니다
      </p>
      <div className="btn_box">
        <button className="btn">
          활동 정보 및 일정
        </button>
        <button className="btn">
          신청하기
        </button>
      </div>
    </div>
  )
}
const AwakeDays = () => {
  return (
    <div className="train_desc">
      <h4>일상에서 깨어있기</h4>
      <figure className="bg_set itm05"></figure>
      <strong>깨달음의 장 이후, 자기 자신을 돌아보는 시간</strong>
      <p>
        수행 잘하고 계신가요? 깨달음의 장 이후 일상에서의 삶은 어떠신가요?<br />
        <span>일상에서 깨어있기</span> 정진을 하거나 깨달음의 장 이후 생활에서 느끼고 깨달은 것,<br />
        가슴 답답한 의문들을 도반과 함께 풀어가는 시간을 가져보세요<br />
        <span>자기 모습도 돌아보고, 반가운 얼굴도 만나보세요</span>
      </p>
      <div className="btn_box">
        <button className="btn">
          활동 정보 및 일정
        </button>
        <button className="btn">
          신청하기
        </button>
      </div>
    </div>
  )
}
const Magazine = () => {
  return (
    <div className="train_desc">
      <h4>월간정토 소개</h4>
      <figure className="bg_set itm06"></figure>
      <strong>괴로움이 없는 사람, 자유로운 사람이 되는 길, 깨달음의 장을 통해 만나보세요</strong>
      <p>
        <span>월간정토</span>는 1988년 창간하여 진실을 밝히는 바른 불교, 누구나 이해하는 쉬운 불교<br />
        일상의 문제를 고민하는 생활불교를 전하고자 지금까지 매달 발간되고 있습니다<br />
        <span>월간정토</span>는 정기구독 수익금으로 점자 도서관, 교도소, 군부대, 병원, 복지관 등에 무료로 배포하여 마음이 밝아지는 부처님 법을 전하고 있습니다
      </p>
      <div className="btn_box">
        <button className="btn">
          활동 정보 및 일정
        </button>
        <button className="btn">
          구독 신청
        </button>
      </div>
    </div>
  )
}


const Training = () => {
  const [num, setNum] = useState(0);
  const TabData = [
    { id: 1, contents: 'awakening', component: <Awakening /> },
    { id: 2, contents: 'divide', component: <Divide /> },
    { id: 3, contents: 'mk', component: <Mk /> },
    { id: 4, contents: 'wmk', component: <Wmk /> },
    { id: 5, contents: 'awake_days', component: <AwakeDays /> },
    { id: 6, contents: 'magazine', component: <Magazine /> },

  ];

  const list_map = [
    { name: "awakening", text: '깨달음의 장' },
    { name: "divide", text: '나눔의 장' },
    { name: "mk", text: '49살 문경살이' },
    { name: "wmk", text: '주말 문경살이' },
    { name: "awake_days", text: '일상에서 깨어있기' },
    { name: "magazine", text: '월간 정토' },
  ]

  return (
    <section className="training">
      <div className="container">
        <div className="title_box">
          <h3>정토회 수련회</h3>
          <p>마음이 맑아지면 인생이 행복해집니다</p>
        </div>
        <div className="contents clearfix">
          <ul className="train_list">
            {list_map.map((elm, idx) => (
              <li key={idx} onClick={
                () => (
                  setNum(idx)
                )
              }
                className={(num === idx) ? `${elm.name} click` : `${elm.name}`}
              >{elm.text}</li>
            ))}
          </ul>
          {TabData[num].component}
        </div>
      </div>
    </section>
  );
}

export default Training;