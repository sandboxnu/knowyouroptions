import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '../index';
import Pill from '../../../components/Pill';

// Styling

const PillContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PillAnswers = styled(PillContainer)`
  height: 100%;
  padding: 0 1rem;
  padding-top: 3rem;
  row-gap: 1rem;
  & > div {
    background-color: #ffebe5;
    border: 0;
    border-radius: 3rem;
    color: black;
    padding: 1rem 3rem;
    width: 100%;
  }
  & > div:hover {
    background-color: purple;
    cursor: pointer;
    color: white;
  }
  padding: 2rem 1rem;
`;

// Components
const SubmitButtonStyled = styled.div`
  background-color: #911d7a;
  border-radius: 0.2rem;
  color: white;
  height: 7vh;
  justify-content: right;
  margin-left: auto;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  vertical-align: middle;
  width: auto;
  text-align: justify;
  cursor: pointer;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: 0;
`;

const PillColumn = ({
  className,
  onClick,
  pillTitles,
  response,
  responseKey,
  setResponse,
}: {
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  pillTitles: string[];
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}): ReactElement => {
  return (
    <PillAnswers className={className}>
      {pillTitles.map((title: string): ReactElement => {
        const newOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
          onClick(event);

          response[responseKey] = [title];
          setResponse(response);
        };
        return (
          <Pill key={title} onClick={newOnClick}>
            {title}
          </Pill>
        );
      })}
    </PillAnswers>
  );
};

export interface SurveyPillProps {
  answers: string[];
  boldedWord: string;
  headerSize?: number;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
  subHeader: string;
  totalPages: number;
}

const SurveyPill = ({
  answers,
  boldedWord,
  headerSize,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  responseKey,
  setResponse,
  totalPages,
  subHeader,
}: SurveyPillProps): ReactElement => {
  return (
    <>
      <Survey
        boldedWord={boldedWord}
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <div>
            <PillColumn
              onClick={onClickForwards}
              pillTitles={answers}
              response={response}
              responseKey={responseKey}
              setResponse={setResponse}
            />
            <ButtonDiv>
              <SubmitButtonStyled onClick={onClickForwards}>
                Submit
              </SubmitButtonStyled>
            </ButtonDiv>
          </div>
        }
        pageNumber={pageNumber}
        question={question}
        subHeader={subHeader}
        totalPages={totalPages}
      />
    </>
  );
};

export default SurveyPill;
