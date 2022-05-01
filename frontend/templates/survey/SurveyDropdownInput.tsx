import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '.';
import { SubmitButton } from './StyledComponents';
import { DropdownStyled } from './StyledComponents';
import SVGDownArrow from '../../public/down-arrow.svg';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const DropdownColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  row-gap: 1rem;
`;

const InputStyled = styled.input`
  align-items: center;
  background-color: #ffebe7;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  height: 3rem;
  :hover {
    border: 0.05rem;
    border-style: solid;
    border-color: purple;
  }
  padding: 0rem 1rem;
  ::placeholder {
  }
  width: 100%;
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

const OptionStyled = styled.option`
  background-color: white;
  border: 0;
  border-radius: 0.5rem;
  :hover {
    background-color: purple;
    cursor: pointer;
    font-color: white;
  }
`;

const SubmitButtonStyled = styled.div`
  background-color: #911d7a;
  border-radius: 0.25rem;
  color: white;
  height: 7vh;
  justify-content: center;
  margin-left: auto;
  margin-top: 3rem;
  padding: 1rem 4rem;
  vertical-align: middle;
  width: 50vw;
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
  const createOnChange = (index: number) => {
    // index is the position of the answer
    const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      let answers = response[responseKey];

      // if answers has not been set, initialize it
      // to an array that is the size of the number of dropdowns
      if (answers === undefined || answers.length === 0) {
        answers = [];
        for (let i = 0; i < selectInfos.length; i++) {
          answers.push('');
        }
      }
      // else, array has already been initialized inside the InputBox
      answers[index] = event.currentTarget.value;
      response[responseKey] = answers;
      setResponse(response);
    };
    return onChange;
  };

  return (
    <>
      <IntroStyled> {intro} </IntroStyled>

      {selectInfos.map((selectInfo, index) => {
        const [labelName, options] = selectInfo;
        const onChange = createOnChange(index);

        return (
          <>
            <ContentContainer>
              <LabelStyled htmlFor={labelName}> {labelName} </LabelStyled>
              <DropdownStyled
                name={labelName}
                id={labelName}
                onChange={onChange}
                IconComponent={SVGDownArrow}
              >
                <option value={labelName} hidden>
                  {labelName}
                </option>
                {options.map((option) => {
                  return (
                    <>
                      <OptionStyled value={option}> {option} </OptionStyled>
                    </>
                  );
                })}
              </DropdownStyled>
            </ContentContainer>
          </>
        );
      })}
    </>
  );
};

const InputBox = ({
  inputQuestion,
  response,
  responseKey,
  selectInfosSize,
  setResponse,
}: {
  inputQuestion: string;
  response: Record<string, string[]>;
  responseKey: string;
  selectInfosSize: number;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}): ReactElement => {
  // pass in user answers to the response
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let answers = response[responseKey];

    // if response value at responseKey has not been set, initialize it
    // with an array that is the size of the number of dropdowns
    if (answers === undefined || answers.length === 0) {
      answers = [];
      for (let i = 0; i < selectInfosSize; i++) {
        answers.push('');
      }
    }
    // push the input box value into the array
    answers[selectInfosSize] = event.currentTarget.value;
    response[responseKey] = answers;
    setResponse(response);
  };

  return (
    <>
      <ContentContainer>
        <LabelStyled htmlFor={inputQuestion}> {inputQuestion} </LabelStyled>
        <InputStyled
          type="text"
          id={inputQuestion}
          onChange={(e) => onChange(e)}
          placeholder={'Input your ' + inputQuestion}
        />
      </ContentContainer>
    </>
  );
};

export interface SurveyDropdownInputProps {
  boldedWord: string;
  dropdownInfos: [string, string[]][];
  headerSize?: number;
  inputQuestion: string;
  intro: string;
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

const SurveyDropdownInput = ({
  boldedWord,
  dropdownInfos,
  headerSize,
  inputQuestion,
  intro,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  responseKey,
  setResponse,
  subHeader,
  totalPages,
}: SurveyDropdownInputProps): ReactElement => {
  return (
    <>
      <Survey
        boldedWord={boldedWord}
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
            <InputBox
              inputQuestion={inputQuestion}
              response={response}
              responseKey={responseKey}
              selectInfosSize={dropdownInfos.length}
              setResponse={setResponse}
            />
            <SubmitButton onClick={onClickForwards} />
          </DropdownColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
        subHeader={subHeader}
        totalPages={totalPages}
      />
    </>
  );
};

export default SurveyDropdownInput;
