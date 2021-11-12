import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from './index';

const CheckboxContainer = styled.div`
  // TODO: change color (click action) when clicking on the entire container, not just checkbox
  align-items: center;
  background-color: #ffebe7;
  display: flex;
  padding: 1rem 1rem;
`;

const CheckboxStyled = styled.input`
  // TODO: change checkbox color
  background-color: #ffebe7;
  height: 1.1rem;
  margin-right: 2rem;
  width: 1.25rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  & > div:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

const CheckboxColumn = ({
  checkboxTitles,
  className,
}: {
  checkboxTitles: string[];
  className?: string;
}): ReactElement => {
  return (
    <>
      {checkboxTitles.map((checkboxTitle) => {
        return (
          <CheckboxContainer>
            <CheckboxStyled type="checkbox" />
            <label>{checkboxTitle}</label>
          </CheckboxContainer>
        );
      })}
    </>
  );
};

export interface SurveyCheckboxProps {
  answers: string[];
  pageNumber: number;
  question: string;
}

const SurveyCheckbox = ({
  answers,
  pageNumber,
  question,
}: SurveyCheckboxProps): ReactElement => {
  return (
    <>
      <Survey
        Options={
          <ColumnContainer>
            <CheckboxColumn checkboxTitles={answers} />
          </ColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyCheckbox;
