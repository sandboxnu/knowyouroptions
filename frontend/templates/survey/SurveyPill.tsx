import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import PillColumn from '../../components/PillColumn';
import Survey from './index';

const PillAnswers = styled(PillColumn)`
  padding: 4rem 1rem;
  row-gap: 1rem;
  & > div {
    background-color: pink;
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

export interface SurveyPillProps {
  answers: string[];
  pageNumber: number;
  question: string;
}

const SurveyPill = ({
  answers,
  pageNumber,
  question,
}: SurveyPillProps): ReactElement => {
  return (
    <>
      <Survey
        Options={<PillAnswers pillTitles={answers} />}
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyPill;
