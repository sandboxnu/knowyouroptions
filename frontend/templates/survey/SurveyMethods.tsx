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
  font-size: .8rem;
  height: 12vh;
  justify-content: flex-end;
  padding: 0.5rem .7rem;
  width: 30%;
`;

const MethodsContainer = styled.div`
  column-gap: .5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5rem 1rem;
  row-gap: .5rem;
`;

const MethodsName = styled.span`
  margin-top: .5rem;
`;

// components

export interface SurveyMethodsProps {
  // methodInfos: [MethodIcon, MethodName][]
  methodInfos: [ReactElement, string][];
  onClick: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
}

const SurveyMethods = ({
  methodInfos,
  onClick,
  pageNumber,
  question,
}: SurveyMethodsProps): ReactElement => {
  return (
    <>
      <Survey
        onClick={onClick}
        Options={
          <MethodsContainer>
            {methodInfos.map((method) => {
              const [methodIcon, MethodName] = method;
              return (
                <MethodCard>
                  {methodIcon}
                  <MethodsName>
                    {MethodName}
                  </MethodsName>
                </MethodCard>
              );
            })}
            <MoveForwardButton onClick={(event) => {onClick(event)}} />
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
