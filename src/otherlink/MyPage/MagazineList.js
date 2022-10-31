import * as Styled from '../../funcSet/styledSet';
import { NoneDisplay } from './NoneDisplay';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../funcSet/funcSet';

const MagazineList = () => {
  const theadList = ['순번', '신청상품', '신청자/구독자', '구독희망시기', '구독기간', '선택'];
  const magazineList = useSelector(state => state.app.magazineList);
  const trainList = useSelector(state => state.app.trainList);
  // const magazineList = {
  //   "_id": "634eb67f4bd9acff10ceb65c",
  //   "userId": "wisberry2022",
  //   "price": 20000,
  //   "phone": "010-5287-1112",
  //   "subPhone": "010-5287-1112",
  //   "address": "부산광역시",
  //   "name": "왕인서",
  //   "subName": "왕인서",
  //   "startYear": 2023,
  //   "startMonth": 1,
  //   "duringYear": 2,
  //   "account": "국민은행: 0830291-11-999123 왕인서 (월간정토)",
  //   "__v": 0
  // }

  return (
    <Styled.StyledDiv className="list_title" >
      {console.log(`magazineList, trainList`, magazineList, trainList)}
      <Styled.StyledSemiTitle align={'left'}>
        월간정토 구독 현황
      </Styled.StyledSemiTitle>
      <Styled.StyledTable position={'relative'}>
        <thead>
          <tr>
            {theadList.map((it, idx) => {
              return (
                <Styled.StyledTableHead key={idx}>{it}</Styled.StyledTableHead>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {isEmpty(magazineList) ? <NoneDisplay /> :
            <tr>
              <Styled.StyledTableData padding={'2rem'}>1</Styled.StyledTableData>
              <Styled.StyledTableData>월간정토</Styled.StyledTableData>
              <Styled.StyledTableData>{magazineList.name} / {magazineList.subName}</Styled.StyledTableData>
              <Styled.StyledTableData>{String(magazineList.startYear) + '-' + String(magazineList.startMonth).padStart(2, '0')}</Styled.StyledTableData>
              <Styled.StyledTableData>{magazineList.duringYear + '년'}</Styled.StyledTableData>
              <Styled.StyledTableData>
                <input type="checkbox" name="magazine_select" value={magazineList.userId} onChange={(e) => {
                  console.log(e.target.value)
                }} />
              </Styled.StyledTableData>
            </tr>
          }
        </tbody>
      </Styled.StyledTable>
      <div className="btn_box">
        <button type="button" className="btn">수정하기</button>
        <button type="button" className="btn">삭제하기</button>
      </div>
    </Styled.StyledDiv>
  )
}

export default MagazineList;