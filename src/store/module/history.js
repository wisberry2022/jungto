import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'historySlice',
  initialState: [
    {
      id: 1, year: '2019', image: true, imageNum: 1, month:
        [
          { id: 1, month: '04', active: ['선유동 정토연수원 개원', '법륜스님 즉문즉설 "행복한 대화" 2019 봄 (33회/~06.13)'] },
          { id: 2, month: '01', active: ['제30차 인도성지순례 (~01.20)'] },
        ]
    },
    {
      id: 2, year: '2018', image: true, imageNum: 2, month:
        [
          { id: 1, month: '12', active: ['봉화 정토수련원 개원', '문경 정토수련원 대중요사채 준공'] },
          { id: 2, month: '07', active: ['의료인 정토회 창립'] },
          { id: 3, month: '06', active: ['제5차 정토회 법사 수계식', '민족의 평화와 통일을 위한 1000일+21일 정진 회향'] },
          { id: 4, month: '03', active: ['법륜스님 즉문즉설 “행복한 대화” 2018 상반기 (33회/~06.07)'] },
        ]
    },
    {
      id: 3, year: '2017', image: true, imageNum: 3, month:
        [
          { id: 1, month: '08', active: ['법륜스님 즉문즉설 “행복한 대화” 2017 해외강연 (45회/~10.08)'] },
          { id: 2, month: '03', active: ['정토행자 만일결사 제9차 천일결사 입재'] },
          { id: 3, month: '02', active: ['법륜스님 즉문즉설 “행복한 대화” 2017 (44회/~06.08)'] },
        ]
    },
    {
      id: 4, year: '2016', image: true, imageNum: 4, month:
        [
          { id: 1, month: '03', active: ['법륜스님 즉문즉설 2016 봄 (44회/~06.17)'] },
        ]
    },
    {
      id: 5, year: '2015', image: true, imageNum: 5, month:
        [
          { id: 1, month: '10', active: ['법륜스님 즉문즉설 2015 가을 (56회/~12.08)'] },
          { id: 2, month: '09', active: ['제1차 통일의병대회'] },
          { id: 3, month: '08', active: ['민족의 평화와 통일을 위한 1000일 정진 입재'] },
          { id: 4, month: '03', active: ['통일의병학교 1기 개강', '제4차 정토회 법사 수계식'] },
        ]
    },
    {
      id: 6, year: '2014', image: true, imageNum: 6, month:
        [
          { id: 1, month: '10', active: ['광주법당 이전 개원', '《정토행자의 하루》 연재 시작'] },
          { id: 2, month: '08', active: ['법륜스님 세계 100회 강연 (~12.18)'] },
          { id: 3, month: '06', active: ['용성진종조사 탄생 150주년 기념식'] },
          { id: 4, month: '03', active: ['정토행자 만일결사 제8차 천일결사 입재'] },
        ]
    },
    {
      id: 7, year: '2013', image: true, imageNum: 7, month:
        [
          { id: 1, month: '10', active: ['인도성지순례 BTN 불교TV 방영'] },
        ]
    },
    {
      id: 8, year: '2012', image: true, imageNum: 8, month:
        [
          { id: 1, month: '09', active: ['법륜스님 전국 100회 연속 가을강좌 (~11월)'] },
          { id: 2, month: '05', active: ['법륜스님 전국 100회 연속 봄강좌 (~8월)'] },
          { id: 3, month: '04', active: ['《법륜스님의 하루》 연재 시작'] },
        ]
    },
    {
      id: 9, year: '2011', image: true, imageNum: 9, month:
        [
          { id: 1, month: '11', active: ['마산법당 이전 개원'] },
          { id: 2, month: '09', active: ['대전법당 이전 개원 (현재 둔산법당)', '법륜스님 전국 100회 순회강연 (~12월)'] },
          { id: 3, month: '03', active: ['정토행자 만일결사 제7차 천일결사 입재'] },
          { id: 4, month: '02', active: ['제1차 정토회 전국대의원회 회의'] },
        ]
    },
    {
      id: 10, year: '2010', image: true, imageNum: 10, month:
        [
          { id: 1, month: '12', active: ['휴대폰 법문 서비스 시작(현재 서비스 종료)'] },
          { id: 2, month: '10', active: ['문경 정토수련원 준공 및 개원식'] },
          { id: 3, month: '08', active: ['법륜스님 즉문즉설 대강연(3회/~08.22 장충체육관)'] },
          { id: 4, month: '07', active: ['4대강 살리기 24시간 릴레이 기도 및 행사'] },
          { id: 5, month: '02', active: ['정토회 미주 사무국 출범'] },
        ]
    },
    {
      id: 11, year: '2009', image: false, imageNum: 0, month:
        [
          { id: 1, month: '06', active: ['문경 정토수련원 대웅보전 준공'] },
          { id: 2, month: '02', active: ['제1차 해외 정토행자대회'] },
          { id: 3, month: '01', active: ['제20차 인도성지순례 (~01.19)'] },
        ]
    },
    {
      id: 12, year: '2008', image: true, imageNum: 11, month:
        [
          { id: 1, month: '12', active: ['제16회 불교언론문화상 인터넷 분야 수상(인터넷 정토회)'] },
          { id: 2, month: '11', active: ['울산법당 이전개원'] },
          { id: 3, month: '08', active: ['제1기 행자대학원 입재'] },
          { id: 4, month: '06', active: ['교사 정토회 창립'] },
          { id: 5, month: '05', active: ['북한주민 아사를 막기 위한 100만인 서명운동(~8월)'] },
          { id: 6, month: '04', active: ['문경 정토수련원 명상원 준공'] },
          { id: 7, month: '03', active: ['정토행자 만일결사 제6차 천일결사 입재'] },
        ]
    },
    {
      id: 13, year: '2007', image: false, imageNum: 0, month:
        [
          { id: 1, month: '07', active: ['제1차 명상수련', '경주정토회 이전 개원'] },
        ]
    },
    {
      id: 14, year: '2006', image: true, imageNum: 12, month:
        [
          { id: 1, month: '10', active: ['제1기 백일출가 입재'] },
        ]
    },
    {
      id: 15, year: '2005', image: true, imageNum: 13, month:
        [
          { id: 1, month: '12', active: ['에코붓다, 빈 그릇 운동 100만인 서약 달성'] },
          { id: 2, month: '08', active: ['제1차 청년·대학생 동북아역사기행'] },
          { id: 3, month: '05', active: ['에코붓다, 빈그릇운동 100만인 서약 캠페인 선포식'] },
          { id: 4, month: '03', active: ['정토행자 만일결사 제5차 천일결사 입재', '제1차 정토행자대회'] },
        ]
    },
    {
      id: 16, year: '2004', image: false, imageNum: 0, month:
        [
          { id: 1, month: '11', active: ['워싱턴정토법당 개원'] },
          { id: 2, month: '02', active: ['광주법당 개원', '해운대법당 개원'] },
        ]
    },
    {
      id: 17, year: '2003', image: false, imageNum: 0, month:
        [
          { id: 1, month: '07', active: ['INEB(세계참여불교네트워크) 개최', '제1차 명상수련'] },
          { id: 2, month: '01', active: ['제1차 청년·대학생 선재수련(인도, 필리핀, 몽골)'] },
        ]
    },
    {
      id: 18, year: '2002', image: false, imageNum: 0, month:
        [
          { id: 1, month: '11', active: ['민족의 화합과 통일을 위한 24시간 1000일정진 회향'] },
          { id: 2, month: '08', active: ['전국 100일 릴레이 거리모금 및 100일 통일기도 시작'] },
          { id: 3, month: '03', active: ['정토행자 만일결사 제4차 천일결사 입재'] },
        ]
    },
    {
      id: 19, year: '2001', image: true, imageNum: 14, month:
        [
          { id: 1, month: '06', active: ['울산정토법당 개원'] },
          { id: 2, month: '04', active: ['제12차 신앙대회'] },
          { id: 3, month: '03', active: ['청주정토법당 개원', '마산정토법당 개원', '쓰레기 제로 운동 시작'] },
          { id: 4, month: '01', active: ['굶주리는 북한동포 돕기 <한주 한 끼 굶기 운동>'] },
        ]
    },
    {
      id: 20, year: '2000', image: false, imageNum: 0, month:
        [
          { id: 1, month: '03', active: ['민족의 화합과 통일을 위한 24시간 1000일정진 입재'] },
        ]
    },
    {
      id: 21, year: '1999', image: true, imageNum: 15, month:
        [
          { id: 1, month: '04', active: ['제10차 신앙대회'] },
          { id: 2, month: '03', active: ['정토행자 만일기도 제3차 천일결사 입재', '100일 법회 (~ 6월 21일)', '도서출판 월간정토 설립', '대전법당 개원'] },
          { id: 3, month: '01', active: ['제10차 인도성지순례 (~01.31)', '정토회관 건립 및 입주'] },
        ]
    },
    {
      id: 22, year: '1998', image: true, imageNum: 16, month:
        [
          { id: 1, month: '10', active: ['정토회 10주년 기념식'] },
          { id: 2, month: '01', active: ['수련원 소식지 "깨달음과 나눔" 발간'] },
        ]
    },
    {
      id: 23, year: '1997', image: true, imageNum: 17, month:
        [
          { id: 1, month: '07', active: ['북한동포돕기 백만인 서명운동(8월 완성)'] },
        ]
    },
    {
      id: 24, year: '1996', image: false, imageNum: 0, month:
        [
          { id: 1, month: '04', active: ['정토행자 만일결사 제2차 천일결사 입재'] },
        ]
    },
    {
      id: 25, year: '1994', image: true, imageNum: 18, month:
        [
          { id: 1, month: '09', active: ['제1차 일체의 장'] },
          { id: 2, month: '06', active: ['대구법당 개원'] },
          { id: 3, month: '04', active: ['뉴욕 정토법당 개원'] },
          { id: 4, month: '01', active: ['제1차 "민족의 뿌리를 찾아서" 고구려, 발해, 독립운동 유적지', '백두산 순례'] },
        ]
    },
    {
      id: 26, year: '1993', image: true, imageNum: 19, month:
        [
          { id: 1, month: '09', active: ['정토대학생회 창립'] },
          { id: 2, month: '03', active: ['정토행자 만일결사 제1차 천일결사 입재', '제3차 정토회 법사 수계식', '중고등학생 법회 라훌라회 창립', '정토포교원 유마거사회 창립'] },
        ]
    },
    {
      id: 27, year: '1992', image: true, imageNum: 20, month:
        [
          { id: 1, month: '12', active: ['제1차 인도성지순례'] },
          { id: 2, month: '10', active: ['제1차 나눔의 장'] },
          { id: 3, month: '08', active: ['미국 순회법회 시작'] },
          { id: 4, month: '04', active: ['제1차 깨달음의 장'] },
          { id: 5, month: '03', active: ['한국불교사회연구소 회보 《서원과 연대》 창간'] },
          { id: 6, month: '01', active: ['청년정토회 창립'] },
        ]
    },
    {
      id: 28, year: '1991', image: true, imageNum: 21, month:
        [
          { id: 1, month: '12', active: ['제2차 정토회 법사 수계식'] },
          { id: 2, month: '09', active: ['정토불교대학 개설', '제1차 정토회 법사 수계식'] },
          { id: 3, month: '06', active: ['정토포교원 신도회 아니룻다회 창립'] },
          { id: 4, month: '02', active: ['정토포교원 정토화랑단 창립'] },
          { id: 5, month: '01', active: ['정토회 국제사업부(한국제이티에스) 설립'] },
        ]
    },
    {
      id: 29, year: '1990', image: true, imageNum: 22, month:
        [
          { id: 1, month: '05', active: ['문경 정토수련원 개원'] },
          { id: 2, month: '04', active: ['제1차 신앙대회'] },
          { id: 3, month: '01', active: ['문경 정토수련원 백화암 회향식'] },
        ]
    },
    {
      id: 30, year: '1989', image: true, imageNum: 23, month:
        [
          { id: 1, month: '12', active: ['정토포교원 어린이 법회 창립'] },
          { id: 2, month: '09', active: ['행자원 개원', '문경 정토수련원 수련장 터 구입'] },
        ]
    },
    {
      id: 31, year: '1988', image: true, imageNum: 24, month:
        [
          { id: 1, month: '08', active: ['한국불교사회연구소 회보 《불교와 한국사회》 창간'] },
          { id: 2, month: '06', active: ['중앙불교교육원 출판부(정토출판) 설립'] },
          { id: 3, month: '05', active: ['월간정토 창간'] },
          { id: 4, month: '04', active: ['한국불교사회연구소 개소'] },
          { id: 5, month: '01', active: ['홍제동 이전, 정토포교원으로 개칭'] },
        ]
    },
    {
      id: 32, year: '1985', image: true, imageNum: 25, month:
        [
          { id: 1, month: '09', active: ['중앙불교교육원, 비원포교원 개원'] },
        ]
    },
  ],
  reducers: {
    GET: (state, action) => {
      return state;
    }
  }
})

export default historySlice.reducer;