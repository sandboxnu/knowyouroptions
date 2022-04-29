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
  border-radius: 0.25rem;
  color: white;
  height: 7vh;
  justify-content: center;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 3rem;
  padding: 1rem 4rem;
  vertical-align: middle;
  width: 20vw;
  text-align: justify;
  cursor: pointer;
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
            <SubmitButtonStyled onClick={onClickForwards}>
              Submit
            </SubmitButtonStyled>
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
