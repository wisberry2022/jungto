import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 10rem 0;
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 120rem;
`;

/** 
 * 정토회 커스텀 버튼(YES Params)
 * @params fontColor => 글자 색상 수정
 * @params bgColor => 배경 색상 수정
*/
export const StyledBtn = styled.button`
  display: inline-block;
  color: ${props => props.fontColor || '#f9f9f9'};
  background-color: ${props => props.backColor || '#EE8545'};
`;

export const StyledTitleBox = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

/** 
 * 정토회 커스텀 h3(YES Params)
 * @params align => 정렬 속성
 * @params width => 가상 요소 길이
*/
export const StyledTitle = styled.h3`
  position: relative;
  margin-bottom: 2.5rem;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: ${props => props.align || 'center'};
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: 0;
    width: ${props => props.width};
    height: 0.2rem;
    background-color: #EE8545;
  }
`;

/** 
 * 정토회 커스텀 p(YES Params)
 * @params align => 정렬 속성
*/
export const StyledPhase = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 1.314;
  text-align: ${props => props.align || 'center'};
`;

/** 
 * 정토회 커스텀 세미타이틀 h4(YES Params)
 * @params align => 정렬 속성
*/
export const StyledSemiTitle = styled.h4`
  margin-bottom: 2.5rem;
  font-size: 2.3rem;
  font-weight: 500;
  text-align: ${props => props.align || 'center'};
`
/** 
 * 정토회 커스텀 세미페이즈p(YES Params)
 * @params marginBottom => margin-bottom 지정
 * @params align => 정렬 속성
*/
export const StyledSemiPhase = styled.p`
  margin-bottom: ${props => props.marginBottom || '2rem'};
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: ${props => props.align || 'center'};
`;

/** 
 * 정토회 커스텀 span(YES Params)
 * @params color => 글자 색상
*/
export const StyledEmphasize = styled.span`
  color: ${props => props.color || 'EE8545'};
`;

/** 
 * 정토회 커스텀 span(YES Params)
 * @params showLine => outline 설정 여부(true/false)
 * @params margin => margin-bottom 설정
 * @params width => figure width 설정
 * @params height => figure height 설정
*/
export const StyledFigure = styled.figure`
  outline: ${props => props.showLine ? '0.1rem solid #000' : 'none'};
  margin: ${props => `0 auto ${props.margin} auto` || '0 auto 1.5rem auto'};
  width: ${props => props.width || '10rem'};
  height: ${props => props.height || '10rem'};
`;

/** 
 * 정토회 커스텀 paragraph(YES Params)
 * @params marginBottom => margin-bottom 지정
 * @params fontSize => 글자 크기 지정
 * @params weight => 글자 두께 설정
*/
export const StyledNormalPhase = styled.p`
  margin-bottom: ${props => props.marginBottom || '1rem'};
  font-size: ${props => props.fontSize || '1.6rem'};
  font-weight: ${props => props.weight || '400'};
  line-height: 1.314;
`;

/** 
 * 정토회 커스텀 div(YES Params)
 * @params padding => 위 아래 padding 설정
*/
export const StyledDiv = styled.div`
  padding: ${props => `${props.padding} 0` || '1.5rem 0'};
`