import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: '깨달음의 장',
    title: '괴로움이 없는 사람, 자유로운 사람이 되는 길, 깨달음의 장을 통해 만나보세요.',
    desc: '깨달음의 장은 괴로움이 없는 사람, 자유로운 사람이 되는 길을 안내하는 수련입니다. 살다 보면 행복하기 위해 선택한 것들이 되려 나를 괴롭히고 있다고 느낄 때가 있습니다. 학교, 직장, 육아, 결혼 등 내가 선택하고 내가 만들었던 것에 갇혀 있는 듯 합니다. 어디서부터 잘못된 걸까요? 자기 자신을 돌아보게 되면 새로운 인생의 문이 열릴 수 있습니다. 깨달음의 장은 지금까지 한 번도 경험하지 못했을 새로운 삶의 세계, 자기 인생의 주인이 되는 세계로 당신을 안내합니다',
    info: [
      {
        id: 1, name: '참가자격', data: [
          '만 20세 이상 ~ 65세 이하 심신이 건강한 사람',
          '아래의 항목에 해당하는 사람은 <깨달음의 장>에 참가할 수 없습니다.'
        ],
        warningFlag: true,
        warningList: [
          '1년 이내 심리치료(우울증, 공황장애, 조현병 등)를 받고 있거나 심리치료제 혹은 신경안정제를 복용하는 사람',
          '디스크를 앓고 있거나 관절이 안 좋아서 오래 앉아 있는 것이 어려운 사람',
          '감기, 호흡기 증상이 있는사람',
          '임신 중인 사람',
        ]
      },
      {
        id: 2, name: '유의사항', data: [
          '수련 시작일 오후 3시에 시작해서 수련 마지막 날 오후 3시에 마칩니다.',
          '수련 시작일 오후 3시 이후로 오시면 수련에 참여할 수 없습니다.',
          '수련이 시작되면 휴대폰을 사용할 수 없습니다.',
          '수련시작일 점심식사는 제공되지 않습니다.',
          '수련 문의 : 054-571-6031'
        ],
        warningFlag: false,
      },
      {
        id: 3, name: '준비물', data: [
          '침낭',
          '세면도구 : 수건, 손수건, 칫솔, 개인 컵(텀블러), 면도기(남자)',
          '운동화나 등산화 : 불편하지 않은 신발을 준비합니다. (구두는 불편합니다.)',
          '옷 : 주로 실내에서 있으므로 편안한 옷으로 준비하면 좋습니다.'
        ],
        warningFlag: true,
        warningList: [
          '특별히 제공되는 옷은 없습니다.',
          '산이라 일교차가 크니 따뜻한 옷을 준비합니다. (겨울에는 두툼한 옷이 필요합니다.)'
        ]
      },
      {
        id: 4, name: '주의사항', data: [
          '여행용 캐리어는 보관할 장소가 없으므로 가져오지 않습니다.',
          '가슴, 등이 많이 파인 옷이나 민소매(소매 없는) 옷, 무릎이 보이는 옷, 몸에 딱 붙는 옷, 속이 비치는 옷은 입지 않습니다.'
        ],
        warningFlag: false,
      },
    ]
  },
  {
    id: 2,
    name: '나눔의 장',
    title: '자신을 사랑하고, 자유롭고 평화로운 인간관계를 경험하고 그렇게 우리는 항상 행복하고자 합니다.',
    desc: '나눔의 장은 스스로 자신과 인간관계로부터 자유로워지는 체험을 할 수 있는 수련입니다. 우리는 항상 행복하고자 합니다. 하지만 인간관계 속에서 화, 짜증, 미움,원망을 벗어나지 못합니다. 나눔의 장에서는 현재 자신의 마음이 어떠한지 볼 수 있습니다. 상대의 마음에 새롭게 다가갈 수 있습니다. 오래 묵은 부정적 감정이 해소되거나 미움이 사라지고 다른 사람을 잘 이해하는 넉넉한 사람이 될 수 있습니다. 나눔의 장은 자신을 사랑할 수 있고 인간관계가 평화로워지는 수련입니다.',
    info: [
      {
        id: 1, name: '참가자격', data: [
          '만 20세 이상 ~ 65세 이하 심신이 건강한 사람',
          '깨달음의 장을 마친 사람만 참가할 수 있습니다.',
          '다음 항목에 해당하는 사람은 수련에 참가할 수 없습니다.'
        ],
        warningFlag: true,
        warningList: [
          '현재 심리치료를 받고 있거나 신경안정제를 복용하는 사람',
          '디스크를 앓고 있거나 관절이 안 좋아서 오래 앉아 있는 것이 어려운 사람',
          '감기, 호흡기 증상이 있는사람',
          '임신 중인 사람'
        ]
      },
      {
        id: 2, name: '유의사항', data: [
          '수련 시작일 오후 3시에 시작해서 수련 마지막 날 오후 3시에 마칩니다.',
          '수련 시작일 오후 3시 이후로 오시면 수련에 참여할 수 없습니다.',
          '수련이 시작되면 휴대폰을 사용할 수 없습니다.',
          '수련시작일 점심식사는 제공되지 않습니다.',
          '수련 문의 : 054-571-6031'
        ],
        warningFlag: false,
      },
      {
        id: 3, name: '준비물', data: [
          '침낭',
          '세면도구 : 수건, 손수건, 칫솔, 개인 컵(텀블러), 면도기(남자)',
          '운동화나 등산화 : 불편하지 않은 신발을 준비합니다. (구두는 불편합니다.)',
          '옷 : 주로 실내에서 있으므로 편안한 옷으로 준비하면 좋습니다.'
        ],
        warningFlag: true,
        warningList: [
          '특별히 제공되는 옷은 없습니다.',
          '산이라 일교차가 크니 따뜻한 옷을 준비합니다. (겨울에는 두툼한 옷이 필요합니다.)'
        ]
      },
      {
        id: 4, name: '주의사항', data: [
          '여행용 캐리어는 보관할 장소가 없으므로 가져오지 않습니다.',
          '가슴, 등이 많이 파인 옷이나 민소매(소매 없는) 옷, 무릎이 보이는 옷, 몸에 딱 붙는 옷, 속이 비치는 옷은 입지 않습니다.'
        ],
        warningFlag: false,
      },
    ]
  },
  {
    id: 3,
    name: '49일 문경살이',
    title: '내 마음을 알아가는 시간, 자신과 사람에 대해 이해하는 시간',
    desc: '49일 동안 문경 정토수련원에서 바라지, 공동체 체험을 하며 출가 행자로 살아보는 프로그램입니다. 문경 정토수련원 대중들과 새벽예불, 발우공양을 시작으로하루를 시작합니다.하루의 일상은 몸을 써서 바라지를 하며 잘 쓰이는 사람이 되어가는 과정입니다.일하는 가운데 마음에 깨어있는 공부를 하며, 마음나누기를 통해서 자신과 사람에 대해 이해하는 시간을 갖습니다.소심경, 예불문 등 학습을 하고 법사님과의 상담을 통해 내 마음을 알아차리고 가벼워지는 시간이 함께합니다.',
    info: [
      {
        id: 1, name: '참가자격', data: [
          '만 20세 이상 – 55세 이하 심신이 건강한 사람',
          '깨달음의 장을 마친 사람 중, 정토수련원에서 바라지하며 살아 보실 분'
        ],
        warningFlag: false,
      },
      {
        id: 2, name: '프로그램', data: [
          '수련원 체험: 수련공양 바라지, 수련준비, 수련원 정비, 농사 등',
          '공동체 체험: 새벽예불, 저녁예불, 발우공양, 대중공사, 매일 300배 정진',
          '수행정진: 학습(소심경, 예불문), 마음나누기, 법사님과의 상담',
          '명상수련: 오프라인 명상 (수련참가비 본인부담)',
          '기타'
        ],
        warningFlag: true,
        warningList: [
          '시작하는 날부터 5일간은 바라지장으로 49일 문경살이 기간에 포함되지 않습니다.',
          '만 배(3일 내) 후 입재합니다.'
        ]
      },
      {
        id: 3, name: '준비물', data: [
          '가방: 백팩이나 작은 가방',
          '옷',
        ],
        warningFlag: true,
        warningList: [
          '무늬 없는 회색이나 흰색 라운드 티 2~3벌',
          '작업복',
          '일상복 (잠옷, 민소매, 반바지는 허용되지 않습니다.)',
          '민무늬 속옷',
          '민무늬 회색 양말 4∼5켤레',
          '모자',
          '겨울(10월~3월)은 산이라 상당히 춥습니다. 기모 내의 2벌, 덧버선, 장갑, 방한용 외투(무채색)',
          '위생용품: 수건, 손수건, 칫솔, 면도기(남자), 면 생리대',
          '화장품: 스킨, 로션과 선크림만 허용',
          '운동화나 등산화: 다니는 길이 경사지고 완만하지 못하므로 편한 신발을 준비합니다.'
        ]
      },
      {
        id: 4, name: '가져오지 말아야 할 것', data: [
          '샴푸, 클렌징폼 등 세안제, 화장지, 일회용품은 가져오지 않습니다.',
          '노트북, 태블릿, 휴대폰, MP3, 책 등',
          '여행용 캐리어는 보관할 장소가 없으므로 가져오지 않습니다.',
        ],
        warningFlag: false,
      },
    ]
  },
  {
    id: 4,
    name: '주말 문경살이',
    title: '일상에서 잠시 벗어나, 내 마음을 알아차리는 시간',
    desc: '정토수련원의 대중들과 함께 생활하는 1박 2일 문경살이는 잠시 일상에서 벗어나 자연 속에서 마음을 쉬며 도반들과 땀 흘려 일하는 가운데 내 마음을 알아차리는 시간입니다.',
    info: [
      {
        id: 1, name: '참가자격', data: [
          '만 20세 이상 ~ 65세 이하 심신이 건강한 사람',
          '깨달음의 장을 마치신 분'
        ],
        warningFlag: false,
      },
      {
        id: 2, name: '수련일정', data: [
          '매월 셋째 주 토요일 오후 2시 ~ 일요일 오후 2시'
        ],
        warningFlag: false,
      },
      {
        id: 3, name: '프로그램', data: [
          '울력과 나누기: 수련원 곳곳을 주인된 자세로 정비한 후 마음나누기를 합니다.',
          '공동체 체험: 수련원 대중들과 발우공양 등의 공동체 체험을 함께 해봅니다.',
          '예불과 기도: 대웅전에서의 새벽 예불과 천일결사 기도, 저녁 예불에 참여합니다.',
          '법사님과의 일문일답'
        ],
        warningFlag: false,
      },
      {
        id: 4, name: '준비물', data: [
          '운동화(필수), 칫솔, 수건, 침낭(또는 시트), 개인 컵, 일하기 편한 옷, 108염주와 기도포 (천일결사자의 경우)'
        ],
        warningFlag: false,
      },
    ]
  },
  {
    id: 5,
    name: '일상에서 깨어있기',
    title: '깨달음의 장 이후, 자기 자신을 돌아보는 시간',
    desc: '수행 잘하고 계신가요? 깨달음의 장 이후 일상에서의 삶은 어떠신가요? 일상에서 깨어있기 정진을 하거나 깨달음의 장 이후 생활에서 느끼고 깨달은 것, 가슴 답답한 의문들을 도반과 함께 풀어가는 시간을 가져보세요. 자기 모습도 돌아보고, 반가운 얼굴도 만나보세요.',
    info: [
      {
        id: 1, name: '참가자격', data: [
          '깨달음의 장을 마치신 분',
        ],
        warningFlag: false,
      },
      {
        id: 2, name: '수련일정', data: [
          '매월 첫째 주 토요일 오후 4시에 시작해서 일요일 오후 3시에 마칩니다.'
        ],
        warningFlag: false,
      },
      {
        id: 3, name: '유의사항', data: [
          '모든 일정을 참가해야 합니다.',
          '휴대폰은 사용하지 않습니다. 휴대폰은 접수 때 맡겨두고 마친 후에 찾아갑니다.',
          '기호품을 섭취하지 않습니다. (과일, 과자, 담배, 술, 음료 등)',
          '법문을 기록하지 않습니다. 녹음, 녹화, 사진 촬영을 하지 않습니다.',
          '화장품, 샴푸, 치약, 비누는 사용하지 않습니다.',
          '책, 노트, 필기구는 필요하지 않습니다.',
          '수련생은 지정된 공간만 사용합니다. (대강당, 솔숲 해우소 및 세면장, 요사채 공양간)',
        ],
        warningFlag: false,
      },
      {
        id: 4, name: '준비물', data: [
          '편한 복장, 운동화, 칫솔, 수건, 면도기, 염주, 매일 모은 기도금',
          '침낭, 개인 컵, 개인수저 및 도시락통(빈 그릇 두 개), 2끼분 반찬, 그릇 닦는 행주'
        ],
        warningFlag: false,
      },
      {
        id: 5, name: '가져오지 말아야 할 것', data: [
          '샴푸, 린스, 비누(세면용, 빨래용), 폼 클렌저, 화장품, 일회용 용품(클렌저 샘플 등)',
          '환경을 생각하고, 화장품이나 비누 냄새는 다른 수련생들에게 자극이 될 수 있으니, 수련원에서 제공되는 것 외에 개별적으로 사용하지 마시기를 간곡하게 부탁드립니다.',
          '가져오신 물건은 모두 가져가 주시기 바랍니다.'
        ],
        warningFlag: false,
      },
    ]
  },
];

const trainTypeSlice = createSlice({
  name: 'trainTypeSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    }
  }
})

export default trainTypeSlice.reducer;
export const { GET } = trainTypeSlice.actions;