import './Magazine.scss';
import * as Styled from '../../../../../funcSet/styledSet';
import Subscribe from './Subscribe';

const TitleBox = () => {
  return (
    <Styled.StyledTitleBox className="magazine_title">
      <Styled.StyledTitle align={'left'} width={'9.5%'}>
        월간정토
      </Styled.StyledTitle>
      <Styled.StyledPhase align={'left'}>
        부처님의 법을 전하는 월간정토를 소개합니다
      </Styled.StyledPhase>
    </Styled.StyledTitleBox>
  )
}

const SemiTitleBox = () => {
  return (
    <div className="semi_titlebox">
      <Styled.StyledSemiTitle align={'left'}>월간정토 소개</Styled.StyledSemiTitle>
      <Styled.StyledNormalPhase marginBottom={'2.5rem'} fontSize={'1.7rem'} weight={'400'}>
        월간정토는 1988년 창간하여 진실을 밝히는 바른 불교, 누구나 이해하는 쉬운 불교, 일상의 문제를 고민하는 생활불교를 전하고자 지금까지 매달 발간되고 있습니다. 법륜스님의 법문과 즉문즉설, 서암 큰스님의 법문을 비롯하여 언제나 자기를 살펴 마음을 맑고 가볍게 가지는 사람들의 수행 이야기를 전합니다. 월간정토에는 서로 대립하고 경쟁하는 세상이 아닌, 서로 돕는 평화로운 세상 이야기가 가득합니다.
      </Styled.StyledNormalPhase>
      <Styled.StyledNormalPhase fontSize={'1.7rem'}>
        월간정토는 정기구독 수익금으로 점자 도서관, 교도소, 군부대, 병원, 복지관 등에 무료로 배포하여 마음이 밝아지는 부처님 법을 전하고 있습니다.
      </Styled.StyledNormalPhase>
    </div>
  )
}

const Magazine = () => {
  return (
    <div className="magazine_wrapper">
      <Styled.StyledSection>
        <Styled.StyledContainer>
          <TitleBox />
          <div className="intro_box">
            <Styled.StyledFigure margin={'4.5rem'} width={'100%'} height={'30rem'} className="bg_set"></Styled.StyledFigure>
            <SemiTitleBox />
          </div>
          <Subscribe />
        </Styled.StyledContainer>
      </Styled.StyledSection>
    </div>
  )
}

export default Magazine;