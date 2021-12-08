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
              >
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
  headerSize?: string;
  inputQuestion: string;
  intro: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}

const SurveyDropdownInput = ({
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
}: SurveyDropdownInputProps): ReactElement => {
  const submitOnClick = (event) => {
    onClickForwards(event);

    // add value of text input to response
    // ASSUME: select values have been added to response
    const textInput = document.getElementById(inputQuestion);
    if (textInput === null) {
      console.log('element with id: ' + inputQuestion + ' does not exist');
    } else {
      let answers = response[responseKey];
      answers.push(textInput.value);
      response[responseKey] = answers;
      setResponse(response);
    }
  };

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
            <InputBox
              inputQuestion={inputQuestion}
              response={response}
              responseKey={responseKey}
              setResponse={setResponse}
            />
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
