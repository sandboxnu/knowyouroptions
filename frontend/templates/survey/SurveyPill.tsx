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
  height: 100%;
  padding: 0 1rem;
  padding-top: 3rem;
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
  padding: 2rem 1rem;
`;

// Components

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
  headerSize?: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
  totalPages: number;
}

const SurveyPill = ({
  answers,
  headerSize,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  responseKey,
  setResponse,
  totalPages,
}: SurveyPillProps): ReactElement => {
  return (
    <>
      <Survey
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <PillColumn
            onClick={onClickForwards}
            pillTitles={answers}
            response={response}
            responseKey={responseKey}
            setResponse={setResponse}
          />
        }
        pageNumber={pageNumber}
        question={question}
        totalPages={totalPages}
      />
    </>
  );
};

export default SurveyPill;
