import * as Styled from '../../../funcSet/styledSet';
import { useSelector } from 'react-redux';
import Table from './Table';
import './Template.scss';

const TrainGuide = ({ renderData }) => {
  return (
    <Styled.StyledDiv padding={'4rem'} className="train_guide">
      <Styled.StyledTitle align={'left'} className="guide_title">
        수련안내
      </Styled.StyledTitle>
      {renderData.map(it => {
        return (
          <div className="guide_box" key={it.id}>
            <h4 className="after_effect">{it.name}</h4>
            <ul className="guide_list">
              {it.warningFlag ?
                it.data.map((its, idx, arr) => {
                  return (
                    <li key={idx}>
                      {idx !== arr.length - 1 ?
                        <strong>{its}</strong> :
                        <>
                          <strong>{its}</strong>
                          <ul className="warning_list">
                            {it.warningList.map((el, num) => {
                              return <li key={num}><strong>{el}</strong></li>
                            })}
                          </ul>
                        </>
                      }
                    </li>
                  )
                })
                :
                it.data.map((its, idx) => {
                  return <li key={idx}><strong>{its}</strong></li>
                })
              }

            </ul>
          </div>
        )
      })}
    </Styled.StyledDiv>
  )
}

const Template = ({ id }) => {
  const trainData = useSelector(state => state.traintype)
  const renderData = trainData[id];

  return (
    <Styled.StyledSection className="template_section">
      <Styled.StyledContainer>
        <Styled.StyledDiv className="train_intro_box">
          <Styled.StyledTitleBox marginBottom={'5rem'}>
            <Styled.StyledTitle align={'left'} width={'9%'}>
              {renderData.name}
            </Styled.StyledTitle>
          </Styled.StyledTitleBox>
          <Styled.StyledSemiTitle align={'left'}>
            {renderData.title}
          </Styled.StyledSemiTitle>
          <Styled.StyledSemiPhase marginBottom={'5rem'} fontSize={'1.7rem'} align={'left'}>
            {renderData.desc}
          </Styled.StyledSemiPhase>
          <figure className={`item0${id + 1} bg_set`}></figure>
        </Styled.StyledDiv>
        <TrainGuide renderData={renderData.info} />
        <Table id={id} />
      </Styled.StyledContainer>
    </Styled.StyledSection>
  )
}

export default Template;