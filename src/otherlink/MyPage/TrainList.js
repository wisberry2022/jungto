import * as Styled from '../../funcSet/styledSet';
import { NoneDisplay } from './NoneDisplay';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../funcSet/funcSet';

const TrainList = () => {
  const theadList = ['순번', '수련이름', '신청자', '성별', '희망입소일자'];
  const trainList = useSelector(state => state.app.trainList);
  // const trainList = [
  //   {
  //     "_id": "6350afee9f09038e18ad9797",
  //     "trainType": "깨달음의 장",
  //     "userId": "wisberry2022",
  //     "phone": "010-5287-1112",
  //     "email": "ground444@naver.com",
  //     "name": "왕인서",
  //     "gender": "남자",
  //     "desiredYear": 2022,
  //     "desiredMonth": 12,
  //     "__v": 0
  //   },
  //   {
  //     "_id": "6350affd9f09038e18ad979a",
  //     "trainType": "나눔의 장",
  //     "userId": "wisberry2022",
  //     "phone": "010-5287-1112",
  //     "email": "ground444@naver.com",
  //     "name": "왕인서",
  //     "gender": "남자",
  //     "desiredYear": 2022,
  //     "desiredMonth": 11,
  //     "__v": 0
  //   }
  // ].map((it, idx) => ({ ...it, 'id': idx + 1 }))

  return (
    <Styled.StyledDiv className="list_title" >
      {console.log(`trainList.js, trainList`, trainList)}
      <Styled.StyledSemiTitle align={'left'}>
        수련 신청 정보
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
          {trainList.length === 0 ? <NoneDisplay /> :
            trainList.map(it => {
              return (
                <tr key={it.id}>
                  <Styled.StyledTableData padding={'2rem'}>{it.id}</Styled.StyledTableData>
                  <Styled.StyledTableData>{it.trainType}</Styled.StyledTableData>
                  <Styled.StyledTableData>{it.name}</Styled.StyledTableData>
                  <Styled.StyledTableData>{it.gender}</Styled.StyledTableData>
                  <Styled.StyledTableData>{it.desiredYear}</Styled.StyledTableData>
                </tr>
              )
            })
          }
        </tbody>
      </Styled.StyledTable>
    </Styled.StyledDiv>
  )
}
export default TrainList;