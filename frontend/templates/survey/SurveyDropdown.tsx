import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '.';
import { DropdownStyled, MoveForwardButton } from './StyledComponents';
// import { Select } from 'antd';
// const { Option } = Select;
// import "antd/dist/antd.css";
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import SVGDownArrow from '../../public/down-arrow.svg';
// import styles from './SurveyDropdown.less';

// Styles

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
      console.log(response);
    };
    return onChange;
  };

  const createValue = (index: number, defaultValue: string): string => {
    const answers = response[responseKey];
    if (answers === undefined || answers.length === 0) {
      return defaultValue;
    } else {
      return answers[index];
    }
  };

  const firstValue = createValue(0, firstLabel);
  return (
    <>
      <IntroStyled> {intro} </IntroStyled>
      <DropdownContainer>
        <LabelStyled htmlFor={firstLabel}> {firstLabel} </LabelStyled>
        <DropdownSmall
          name={firstLabel}
          id={firstLabel}
          onChange={createOnChange(0)}
          IconComponent={SVGDownArrow}
        >
          <option
            value={firstLabel}
            selected={firstValue == firstLabel}
            disabled
            hidden
          >
            {' '}
            {firstLabel}{' '}
          </option>
          {firstOptions.map((option) => {
            return (
              <>
                <OptionStyled
                  value={option}
                  selected={firstValue == firstLabel}
                >
                  {' '}
                  {option}{' '}
                </OptionStyled>
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
              selectValue={createValue(index + 1, labelName)}
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
  selectValue = labelName,
  setResponse,
}: {
  labelName: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  response: Record<string, string[]>;
  responseKey: string;
  selectValue?: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
}): ReactElement => {
  return (
    <>
      <DropdownContainer>
        <LabelStyled htmlFor={labelName}> {labelName} </LabelStyled>
        <DropdownStyled
          name={labelName}
          id={labelName}
          onChange={onChange}
          IconComponent={SVGDownArrow}
        >
          <option value={labelName} selected={labelName == selectValue} hidden>
            {labelName}
          </option>
          {options.map((option) => {
            return (
              <>
                <option
                  value={option}
                  onClick={() => {
                    console.log('hi');
                  }}
                  selected={option == selectValue}
                >
                  {option}
                </option>
              </>
            );
          })}
        </DropdownStyled>
      </DropdownContainer>
    </>
  );
};

export interface SurveyDropdownProps {
  boldedWord: string;
  dropdownInfos: [string, string[]][];
  intro: string;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
  subHeader: string;
}

const SurveyDropdown = ({
  boldedWord,
  dropdownInfos,
  intro,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  responseKey,
  setResponse,
  subHeader,
}: SurveyDropdownProps): ReactElement => {
  return (
    <>
      <Survey
        boldedWord={boldedWord}
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
        subHeader={subHeader}
      />
    </>
  );
};

export default SurveyDropdown;
