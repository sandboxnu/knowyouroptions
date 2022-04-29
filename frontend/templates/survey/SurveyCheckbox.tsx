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

const CheckboxContainerSelected = styled(CheckboxContainer)`
  background-color: purple;
  color: white;
`;

const CheckboxStyled = styled.input`
  // TODO: change checkbox color
  color: #ffebe7;
  cursor: pointer;
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
    color: white;
    cursor: pointer;
  }
`;

const CheckboxColumn = ({
  checkboxTitles,
  className,
  responseKey,
  setCurPage,
  response,
  setResponse,
}: {
  checkboxTitles: string[];
  className?: string;
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
      {checkboxTitles.map((checkboxTitle, idx) => {
        const [checked, setChecked] = useState(false);
        const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
          setChecked(!checked);
          storeCheckedResponse(!checked, checkboxTitle);
        };
        const Container = checked
          ? CheckboxContainerSelected
          : CheckboxContainer;

        return (
          <Container key={idx} onClick={onClick}>
            <CheckboxStyled
              type="checkbox"
              checked={checked}
              onChange={() => {}}
            />
            <label>{checkboxTitle}</label>
          </Container>
        );
      })}
    </>
  );
};

export interface SurveyCheckboxProps {
  answers: string[];
  boldedWord: string;
  hasInputBox?: boolean;
  headerSize?: number;
  responseKey: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: {};
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
  subHeader: string;
  totalPages: number;
}

const SurveyCheckbox = ({
  answers,
  boldedWord,
  hasInputBox,
  headerSize,
  responseKey,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  setResponse,
  subHeader,
  totalPages,
}: SurveyCheckboxProps): ReactElement => {
  return (
    <>
      <Survey
        boldedWord={boldedWord}
        headerSize={headerSize}
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
        subHeader={subHeader}
        totalPages={totalPages}
      />
    </>
  );
};

export default SurveyCheckbox;
