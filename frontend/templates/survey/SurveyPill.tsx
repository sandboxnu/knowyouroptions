import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from './index';
import Pill from '../../components/Pill';

// Styling

const PillContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PillAnswers = styled(PillContainer)`
  padding: 4rem 1rem;
  row-gap: 1rem;
  & > div {
    background-color: #ffebe5;
    border: 0;
    border-radius: 3rem;
    color: black;
    font-weight: 500;
    padding: 1rem 3rem;
    width: 100%;
  }
  & > div:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

// Components

const PillColumn = ({
    className,
    onClick,
    pillTitles,
  // setValues
  }: {
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  pillTitles: string[];
}): ReactElement => {
  return (
    <PillAnswers className={className}>
      {pillTitles.map(
        (title: string): ReactElement => {
          const newOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
            onClick(event);
          }
          return (
            <Pill key={title} onClick={newOnClick}>{title}</Pill>
          );
        }
      )}
    </PillAnswers>
  );
};

export interface SurveyPillProps {
  answers: string[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
}

const SurveyPill = ({
  answers,
  onClick,
  pageNumber,
  question,
}: SurveyPillProps): ReactElement => {
  return (
    <>
      <Survey
        onClick={onClick}
        Options={<PillColumn onClick={onClick} pillTitles={answers} />}
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyPill;
