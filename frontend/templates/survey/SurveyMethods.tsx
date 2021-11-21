import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Survey from './index';
import SvgRightArrowWhite from '../../public/right-arrow-white.svg';
import { MoveForwardButton } from './StyledComponents';

// styling

const MethodCard = styled.div`
  align-items: center;
  background-color: #ffebe5;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  height: 12vh;
  justify-content: flex-end;
  padding: 0.5rem 0.7rem;
  width: 30%;
`;

const MethodsContainer = styled.div`
  column-gap: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5rem 1rem;
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
  return (
    <>
      <Survey
        onClick={onClickBackwards}
        Options={
          <MethodsContainer>
            {methodInfos.map((method) => {
              const [methodIcon, MethodName] = method;
              return (
                <MethodCard>
                  {methodIcon}
                  <MethodsName>{MethodName}</MethodsName>
                </MethodCard>
              );
            })}
            <MoveForwardButton onClick={onClickForwards} />
          </MethodsContainer>
        }
        pageNumber={pageNumber}
        question={question}
        smallHeader={true}
      />
    </>
  );
};

export default SurveyMethods;
