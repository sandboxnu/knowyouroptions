import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '.';

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
  padding: 0.75rem 0.75rem;
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
  padding: 1rem 4rem;
  vertical-align: middle;
  width: 50vw;
`;

const DropdownColumn = ({
  classNames,
  intro,
  selectInfos,
}: {
  classNames?: string;
  intro: string;
  selectInfos: [string, string[]][];
}): ReactElement => {
  return (
    <>
      <IntroStyled> {intro} </IntroStyled>

      {selectInfos.map((selectInfo) => {
        const [labelName, options] = selectInfo;

        return (
          <>
            <ContentContainer>
              <LabelStyled htmlFor={labelName}> {labelName} </LabelStyled>
              <DropdownStyled name={labelName} id={labelName}>
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
}: {
  inputQuestion: string;
}): ReactElement => {
  return (
    <>
      <ContentContainer>
        <LabelStyled htmlFor={inputQuestion}> {inputQuestion} </LabelStyled>
        <InputStyled
          type="text"
          id={inputQuestion}
          placeholder={'Input your ' + inputQuestion}
        />
      </ContentContainer>
    </>
  );
};

const SubmitButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}): ReactElement => {
  return (
    <SubmitButtonStyled
      onClick={(event) => {
        onClick(event);
      }}
    >
      Submit
    </SubmitButtonStyled>
  );
};

export interface SurveyDropdownInputProps {
  dropdownInfos: [string, string[]][];
  inputQuestion: string;
  intro: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
}

const SurveyDropdownInput = ({
  dropdownInfos,
  inputQuestion,
  intro,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
}: SurveyDropdownInputProps): ReactElement => {
  return (
    <>
      <Survey
        onClick={onClickBackwards}
        Options={
          <DropdownColumnContainer>
            <DropdownColumn intro={intro} selectInfos={dropdownInfos} />
            <InputBox inputQuestion={inputQuestion} />
            <SubmitButton onClick={onClickForwards} />
          </DropdownColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyDropdownInput;
