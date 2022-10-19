import * as Styled from '../../../../funcSet/styledSet';
import Template from '../Template';

const Divide = () => {
  const num = 1;
  return (
    <Styled.StyledDiv padding={'0'} className="divide_wrapper">
      <Template id={num} />
    </Styled.StyledDiv>
  )
}

export default Divide;