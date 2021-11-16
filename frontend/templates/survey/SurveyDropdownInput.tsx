import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '.';

// ABSTRACT ALL OF THIS

// divs and padding are weird

const DropdownColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
  row-gap: 0rem;
`;

// how to style the down-pointing arrow???
// how to make displayed text the labelName rather than the default first option
// dropdown on this page is weird: arrow transitions to facing up, prototype doesn't display options
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
  padding: 0.75rem 0.75rem;
  width: 100%;
`;

// age needs to be half width
const DropdownSmall = styled(DropdownStyled)`
  width: 50%;
`;

// fix the inputQuestion placeholder
// create gray line underneath***
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

// how to style an option?????
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
            <div>
              {/* weird error when trying to do for attribute, so changed to htmlFor*/}
              <LabelStyled htmlFor={labelName}> {labelName} </LabelStyled>
              <br></br>
              <DropdownStyled name={labelName} id={labelName}>
                {options.map((option) => {
                  return (
                    <>
                      <OptionStyled value={option}> {option} </OptionStyled>
                    </>
                  );
                })}
              </DropdownStyled>
              <br></br>
              <br></br>
            </div>
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
      <LabelStyled htmlFor={inputQuestion}> {inputQuestion} </LabelStyled>
      <br></br>
      <InputStyled
        type="text"
        id={inputQuestion}
        placeholder={'Input your ' + inputQuestion}
      />
    </>
  );
};

export interface SurveyDropdownInputProps {
  dropdownInfos: [string, string[]][];
  inputQuestion: string;
  intro: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
}

const SurveyDropdownInput = ({
  dropdownInfos,
  inputQuestion,
  intro,
  onClick,
  pageNumber,
  question,
}: SurveyDropdownInputProps): ReactElement => {
  return (
    <>
      <Survey
        onClick={onClick}
        Options={
          <DropdownColumnContainer>
            <DropdownColumn intro={intro} selectInfos={dropdownInfos} />
            <InputBox inputQuestion={inputQuestion} />
          </DropdownColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyDropdownInput;
