import * as Styled from '../../../../funcSet/styledSet';
import Template from '../Template';

const TempleStay = () => {
  const num = 2;
  return (
    <Styled.StyledDiv padding={'0'} className="templestay_wrapper">
      <Template id={num} />
    </Styled.StyledDiv>
  )
}

export default TempleStay;