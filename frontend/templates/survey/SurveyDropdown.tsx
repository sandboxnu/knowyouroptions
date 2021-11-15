import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '.';

// divs and padding are weird

const DropdownColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
  row-gap: 0rem;
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
  selectInfos,
}: {
  classNames?: string;
  intro: string;
  selectInfos: [string, string[]][];
}): ReactElement => {
  const [firstLabel, firstOptions] = selectInfos[0];
  const restInfos = selectInfos.slice(1);

  return (
    <>
      <IntroStyled> {intro} </IntroStyled>

      <div>
        <LabelStyled htmlFor={firstLabel}> {firstLabel} </LabelStyled>
        <br></br>
        {/*instead of br tag use display:flex in a div container (line 81)*/}
        <DropdownSmall name={firstLabel} id={firstLabel}>
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
        <br></br>
        <br></br>
      </div>

      {restInfos.map((selectInfo) => {
        const [labelName, options] = selectInfo;

        {
          /*make this another component*/
        }
        return (
          <>
            <div>
              <LabelStyled htmlFor={labelName}> {labelName} </LabelStyled>
              <br></br>
              {/*instead of br tag use display:flex in a div container (line 81)*/}
              <DropdownStyled name={labelName} id={labelName}>
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
              <br></br>
              <br></br>
            </div>
          </>
        );
      })}
    </>
  );
};

export interface SurveyDropdownProps {
  dropdownInfos: [string, string[]][];
  intro: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
}

const SurveyDropdown = ({
  dropdownInfos,
  intro,
  onClick,
  pageNumber,
  question,
}: SurveyDropdownProps): ReactElement => {
  return (
    <>
      <Survey
        Options={
          <DropdownColumnContainer>
            <DropdownColumn intro={intro} selectInfos={dropdownInfos} />
          </DropdownColumnContainer>
        }
        pageNumber={pageNumber}
        question={question}
      />
    </>
  );
};

export default SurveyDropdown;
