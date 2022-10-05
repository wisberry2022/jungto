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
        <Link to="#" className="btn">오시는 길</Link>
      </div>
    </div>
  )
}

const Center = () => {
  const centerList = [
    { id: 1, title: '문경 정토수련원', desc: ['문경 정토수련원은 백화산(해발 1,063m) 아래 자리잡고 있습니다. 1989년 조계종 종정이었던 서암 큰스님이 터를 잡았습니다. 법륜스님께서 마을 어른 남재우 거사 부부와 함께 아랫마을 빈집을 뜯어 옮겨와 집을 지었습니다. 서암 큰스님의 증명 하에 관세음보살 좌상을 모시고 ‘백화암’이라 이름 짓고, 1990년 5월 문경 정토수련원을 개원했습니다. 스님을 비롯한 상주대중과 행자들이 생활 공동체를 구성하여 수련과 교육을 진행하고, 함께 살림하고 농사지으며 수련원을 운영하고 있습니다.', '정토회 수련원의 본원인 문경 정토수련원에서는 깨달음의 장, 나눔의 장, 명상, 백일출가 등 다양한 수련 프로그램을 진행하고 있으며, 수련을 거쳐 간 많은 이들에게 "마음의 고향"이 되고 있습니다.'] },
    { id: 2, title: '지리산 정토수련원', desc: ['지리산 정토수련원은 1995년 4월 인수하고 기존의 건물을 보수하여 2013년 7월 24일부터 지금까지 깨달음의 장을 진행해 오고 있습니다. 수련 준비와 진행, 시설 정비, 아름다운 꽃밭, 신선한 먹거리를 제공하는 유기농 텃밭 농사에 이르기까지 모든 운영이 깨달음의 장 수련을 다녀가신 한 분 한 분의 정성 어린 자원봉사로 이루어지고 있습니다. 천왕봉의 정기를 듬뿍 받아 햇살이 따뜻하고 아늑하며 풍광이 아름답습니다.'] },
    { id: 3, title: '봉화 정토수련원', desc: ['봉화 정토수련원은 청정지역 봉화의 전형적인 솔숲 속에 자리하고 있습니다. 2007년 8월에 인수해서 작은 기도 공간인 법당과 강당, 소박한 수행자의 숙소인 황토방들은 시간 내어 찾았던 수많은 행자들의 자원봉사로 지어졌습니다. 자연의 조화로움은 욕심에 번다했던 우리의 마음을 가라앉힙니다. 공동체와 활동가들이 주로 사용하는 본원은 수련 진행, 시설 관리, 자연적인 텃밭 농사에 이르기까지 모든 운영이 공동체 분들과 깨달음의 장 수련을 거친 분들의 자원봉사로 이루어지고 있습니다.'] },
    { id: 4, title: '선유동 정토연수원', desc: ['문경 선유동에 위치한 정토연수원은 정토회 회원들을 위한 교육기관으로 일과 수행의 통일을 일상에서 체험해 나갈 수 있도록 교육연수를 진행하는 곳입니다.'] },
  ];


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