import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from './index';
import SvgRightArrowWhite from '../../public/right-arrow-white.svg';
import { MoveForwardButton } from './StyledComponents';

// constants
const secondaryColor = '#911d7a';
const fillColor = secondaryColor;
const strokeColor = 'white';

const SVGStyled = `
  circle {
      fill: ${fillColor};
      stroke: ${strokeColor};
    }
    
    ellipse {
      fill: ${fillColor};
      stroke: ${strokeColor};
    }
    
    rect {
      fill: ${fillColor};
      stroke: ${strokeColor};
    }

    path {
      fill: ${fillColor};
      stroke: ${strokeColor};
    }
`;

// styling

const Container = styled.div`
  row-gap: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
`;

const MethodCard = styled.a`
  align-items: center;
  background-color: #ffebe5;
  border-radius: 0.2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  height: 12vh;
  justify-content: flex-end;
  padding: 0.5rem 0.7rem;
  width: 30%;
  
  &:hover, &:active {
    background-color: ${secondaryColor};
    color: white;
  }
  
  &:hover > svg {
    ${SVGStyled}
  }
`;

const MethodCardClicked = styled(MethodCard)`
  background-color: ${secondaryColor};
  color: white;

  > svg {
    ${SVGStyled}
  }
`;

const MethodsContainer = styled.div`
  column-gap: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 0.5rem;
`;

const MethodsName = styled.span`
  margin-top: 0.5rem;
`;

// components

export interface SurveyMethodsProps {
  // methodInfos: [MethodIcon, MethodName][]
  methodInfos: [ReactElement, string][];
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
}

const SurveyMethods = ({
  methodInfos,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
}: SurveyMethodsProps): ReactElement => {
  const [methodsClicked, setMethodsClicked] = useState(new Set());

  return (
    <>
      <Survey
        onClick={onClickBackwards}
        Options={
          <Container>
            <MethodsContainer>
              {methodInfos.map((method) => {
                const [MethodIcon, methodName] = method;

                const ClickedIcon = styled(MethodIcon)`
                  ${SVGStyled}
                `;

                const Card = methodsClicked.has(methodName)?
                  MethodCardClicked
                  : MethodCard;

                const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  const newMethodsClicked = methodsClicked;
                  if (methodsClicked.has(methodName)) {
                    newMethodsClicked.delete(methodName)
                  } else {
                    newMethodsClicked.add(methodName);
                  }

                  setMethodsClicked(new Set(newMethodsClicked));
                }
                return (
                  <Card onClick={onClick} key={methodName}>
                    {<MethodIcon />}
                    <MethodsName>{methodName}</MethodsName>
                  </Card>
                );
              })}
            </MethodsContainer>
            <MoveForwardButton onClick={onClickForwards} />
          </Container>
        }
        pageNumber={pageNumber}
        question={question}
        smallHeader={true}
      />
    </>
  );
};

export default SurveyMethods;
