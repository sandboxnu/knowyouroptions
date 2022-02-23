import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '.';
import { MoveForwardButton } from './StyledComponents';

const DropdownColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  row-gap: 1.5rem;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

// how to style the down-pointing arrow???
// make a gap between the dropdown box and the options
const DropdownStyled = styled.select`
  align-items: center;
  background-color: #ffebe7;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  height: 3rem;
  :hover {
    cursor: pointer;
  }
  & option:hover {
    box-shadow: red;
    cursor: pointer;
    font-color: red;
  }
  padding: 0.75rem 0.75rem;
  width: 100%;
`;

const DropdownSmall = styled(DropdownStyled)`
  width: 50%;
`;

const IntroStyled = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const LabelStyled = styled.label`
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
`;

// how to style an option?????
const OptionStyled = styled.option`
  background-color: white;
  border: 0;
  border-radius: 0.5rem;
`;

const DropdownColumn = ({
  classNames,
  intro,
  response,
  responseKey,
  selectInfos,
  setResponse,
}: {
  classNames?: string;
  intro: string;
  response: Record<string, string[]>;
  responseKey: string;
  selectInfos: [string, string[]][];
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}): ReactElement => {
  const [firstLabel, firstOptions] = selectInfos[0];
  const restInfos = selectInfos.slice(1);

  const createOnChange = (index: number) => {
    // index is the position of the answer
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      let answers = response[responseKey];
      if (answers === undefined || answers.length === 0) {
        answers = [];
        for (let i = 0; i < selectInfos.length; i++) {
          answers.push('');
        }
      }
      answers[index] = event.currentTarget.value;
      response[responseKey] = answers;
      setResponse(response);
    };
    return onChange;
  };

  return (
    <>
      <IntroStyled> {intro} </IntroStyled>

      <DropdownContainer>
        <LabelStyled htmlFor={firstLabel}> {firstLabel} </LabelStyled>
        <DropdownSmall
          name={firstLabel}
          id={firstLabel}
          onChange={createOnChange(0)}
        >
          <option value={firstLabel} selected disabled hidden>
            {' '}
            {firstLabel}{' '}
          </option>
          {firstOptions.map((option) => {
            return (
              <>
                <OptionStyled value={option}> {option} </OptionStyled>
              </>
            );
          })}
        </DropdownSmall>
      </DropdownContainer>
      {restInfos.map((selectInfo, index) => {
        const [labelName, options] = selectInfo;
        const onChange = createOnChange(index + 1);
        return (
          <>
            <DropdownColumnBody
              labelName={labelName}
              onChange={onChange}
              options={options}
              response={response}
              responseKey={responseKey}
              setResponse={setResponse}
            />
          </>
        );
      })}
    </>
  );
};

const DropdownColumnBody = ({
  labelName,
  onChange,
  options,
  response,
  responseKey,
  setResponse,
}: {
  labelName: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}): ReactElement => {
  return (
    <>
      <DropdownContainer>
        <LabelStyled htmlFor={labelName}> {labelName} </LabelStyled>
        <DropdownStyled name={labelName} id={labelName} onChange={onChange}>
          <option value={labelName} selected disabled hidden>
            {' '}
            {labelName}{' '}
          </option>
          {options.map((option) => {
            return (
              <>
                <OptionStyled value={option}> {option} </OptionStyled>
              </>
            );
          })}
        </DropdownStyled>
      </DropdownContainer>
    </>
  );
};

export interface SurveyDropdownProps {
  dropdownInfos: [string, string[]][];
  headerSize?: number;
  intro: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
  totalPages: number;
}

const SurveyDropdown = ({
  dropdownInfos,
  headerSize,
  intro,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  responseKey,
  setResponse,
  totalPages,
}: SurveyDropdownProps): ReactElement => {
  return (
    <>
      <Survey
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <DropdownColumnContainer>
            <DropdownColumn
              intro={intro}
              selectInfos={dropdownInfos}
              response={response}
              responseKey={responseKey}
              setResponse={setResponse}
            />
            <MoveForwardButton onClick={onClickForwards} />
          </DropdownColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
        totalPages={totalPages}
      />
    </>
  );
};

export default SurveyDropdown;
