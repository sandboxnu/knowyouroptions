import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import SvgLeftArrow from '../../public/left-arrow.svg';

// styled
const Container = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  background-color: #febba8;
  height: 100%;
`;

const Fraction = styled.p`
  color: gray;
  font-size: 1.2rem;
`;

const Header = styled(Container)`
  min-height: 40%;
  padding: 1.5rem;
`;

const HeaderSmall = styled(Container)`
  min-height: 35%;
  padding: 1.5rem;
`;

const PageNumber = styled.span`
  color: black;
  font-family: 'Din 2014';
  font-size: 2rem;
  font-weight: 900;
`;

const Question = styled.h1`
  color: #5d5d5d;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: lighter;
  margin-bottom: 0.5rem;
`;

const Subheader = styled.h6`
  color: #707070;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 100;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// components
const PageNumberFraction = ({ number }: { number: number }): ReactElement => {
  return (
    <>
      <Fraction>
        <PageNumber>{number}</PageNumber> / 7
      </Fraction>
    </>
  );
};

export interface SurveyProps {
  boldedWord: string; // the bolded word in the question
  onClick: React.MouseEventHandler<HTMLDivElement>;
  Options: ReactElement;
  pageNumber: number;
  question: string;
  smallHeader?: boolean;
  subHeader: string;
}

const Survey = ({
  boldedWord,
  onClick,
  Options,
  pageNumber,
  question,
  smallHeader,
  subHeader,
}: SurveyProps): ReactElement => {
  const HeaderElm = smallHeader ? HeaderSmall : Header;

  // escape special characters to use with RegExp
  function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // bold the keyword in the question
  const makeBold = (question: string, toBold: string) => {
    const boldedQuestion = question.replace(
      new RegExp(escapeRegExp(toBold), 'g'),
      '<b>' + toBold + '</b>',
    );
    return boldedQuestion;
  };

  return (
    <Wrapper>
      <HeaderElm>
        <SvgLeftArrow onClick={onClick} />
        <PageNumberFraction number={pageNumber} />
        <Question
          dangerouslySetInnerHTML={{ __html: makeBold(question, boldedWord) }}
        ></Question>
        <Subheader>{subHeader}</Subheader>
      </HeaderElm>

      <Content>{Options}</Content>
    </Wrapper>
  );
};

export default Survey;

const SurveyKeys = [
  'PregnancyAge',
  'SexuallyActiveStage',
  'TriedMethods',
  'UsedMethods',
  'MoreInformationMethods',
  'WhereEducation',
  'LookingFor',
  'Demographics',
  'Location',
];

export { SurveyKeys };
