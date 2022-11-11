import * as Styled from '../../funcSet/styledSet';
import { NoneDisplay } from './NoneDisplay';
import { useSelector } from 'react-redux';

const TrainList = () => {
  const theadList = ['순번', '수련이름', '신청자', '성별', '희망입소일자'];
  const trainList = useSelector(state => state.app.trainList);

  return (
    <Styled.StyledDiv className="list_title" >
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
                  <Styled.StyledTableData>{String(it.desiredYear) + "-" + String(it.desiredMonth).padStart(2, '0')}</Styled.StyledTableData>
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