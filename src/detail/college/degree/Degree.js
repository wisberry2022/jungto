import { Link } from 'react-router-dom';
import './degree.scss';

const DegreeTable = () => {
  const degreeInfoList = [
    { id: 1, title: '입학대상', desc: ['만 19세 이상 (학력제한 없음)'] },
    { id: 2, title: '재학기간', desc: ['2022. 9. 18 (일) ~ 2023. 2. 19 (일) (5개월)'] },
    { id: 3, title: '수업시간', desc: [`온라인 수업 : 주 1회 70분 (목요일 오전 10시/오후 8시 중 선택, 교차수강 불가)`, `즉문즉설 : 월 1회 2시간 (토요일 오전 10시)`, `실천활동 : 월 1회 2~3시간 (으뜸절 활동 3시간, 지역 활동 2시간)`] },
    { id: 4, title: '졸업요건', desc: ['각 교과별 50% 이상 출석 + 전체 70%(19회) 이상 출석(2가지 요건 모두 충족해야 함)'] },
    { id: 5, title: '신청마감', desc: ['2022. 9. 4 (일)까지 선착순 마감'] },
    { id: 6, title: '입학식', desc: ['2022. 9. 18 (일) 온라인 입학식'] },
    { id: 7, title: '입학금', desc: ['150,000원', '별도의 수업료는 없음', '송금인명은 “학생이름+전화번호 뒤4자리”', '입학금은 2022. 9. 4 (일)까지 입금해야 함', '입학금은 입학식 당일까지 환불 가능'] },
    { id: 8, title: '입학문의', desc: ['전화문의 02-587-8990'] },
  ];

  return (
    <div className="degree_intro">
      <strong>※ 일정과 프로그램은 상황에 따라 바뀔 수 있습니다.</strong>
      <table>
        <thead>
          <tr>
            <th>안내</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {degreeInfoList.map(it => {
            return (
              <tr key={it.id}>
                <td className="title">{it.title}</td>
                <td className="desc">
                  <ul className="desc_list">
                    {it.desc.map((it, idx, arr) => {
                      return (
                        <li key={arr.indexOf(it)}>{it}</li>
                      )
                    })}
                  </ul>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const Degree = () => {
  return (
    <section className="degree">
      <div className="container">
        <div className="semi_title">
          <h4>학사안내 및 입학신청</h4>
        </div>
        <DegreeTable />
        <Link to="entry" className="btn">입학신청하기</Link>
      </div>
    </section>
  )
}

export default Degree;