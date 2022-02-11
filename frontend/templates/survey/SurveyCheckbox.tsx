import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from './index';
import { MoveForwardButton } from './StyledComponents';

const CheckboxContainer = styled.div`
  // TODO: change color (click action) when clicking on the entire container, not just checkbox
  align-items: center;
  background-color: #ffebe7;
  display: flex;
  font-size: 0.85rem;
  padding: 0.75rem 1rem;
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
  padding: 1rem 1rem;
  row-gap: 1rem;
  & > div:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

const CheckboxColumn = ({
  checkboxTitles,
  className,
  responseKey,
  onClick,
  setCurPage,
  response,
  setResponse,
}: {
  checkboxTitles: string[];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  setCurPage?: React.Dispatch<React.SetStateAction<string>>;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}): ReactElement => {
  const storeCheckedResponse = (isChecked: boolean, title: string) => {
    const answers =
      response[responseKey] === undefined ? [] : response[responseKey];
    if (isChecked) {
      answers.push(title);
    } else {
      const index = answers.indexOf(title);
      answers.splice(index, 1);
    }
    response[responseKey] = answers;
    setResponse(response);
  };
  return (
    <>
      {checkboxTitles.map((checkboxTitle) => {
        return (
          <CheckboxContainer>
            <CheckboxStyled
              type="checkbox"
              onChange={(event) => {
                storeCheckedResponse(event.target.checked, checkboxTitle);
              }}
            />
            <label>{checkboxTitle}</label>
          </CheckboxContainer>
        );
      })}
    </>
  );
};

export interface SurveyCheckboxProps {
  answers: string[];
  responseKey: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: {};
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}

const SurveyCheckbox = ({
  answers,
  responseKey,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  setResponse,
}: SurveyCheckboxProps): ReactElement => {
  return (
    <>
      <Survey
        onClick={onClickBackwards}
        Options={
          <ColumnContainer>
            <CheckboxColumn
              responseKey={responseKey}
              checkboxTitles={answers}
              response={response}
              setResponse={setResponse}
            />
            <MoveForwardButton onClick={onClickForwards} />
          </ColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyCheckbox;
