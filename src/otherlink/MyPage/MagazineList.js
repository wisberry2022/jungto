import * as Styled from '../../funcSet/styledSet';
import { NoneDisplay } from './NoneDisplay';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../funcSet/funcSet';

const MagazineList = () => {
  const theadList = ['순번', '신청상품', '신청자/구독자', '구독희망시기', '구독기간'];
  const magazineList = useSelector(state => state.app.magazineList);

  return (
    <Styled.StyledDiv className="list_title" >
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
            </tr>
          }
        </tbody>
      </Styled.StyledTable>
    </Styled.StyledDiv>
  )
}

export default MagazineList;