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

const HeaderDefault = styled(Container)`
  min-height: 44%;
  padding: 1rem 1.5rem;
`;

const Header1 = styled(HeaderDefault)`
  min-height: 41%;
`;

const Header2 = styled(HeaderDefault)`
  min-height: 39%;
`;

const Header3 = styled(HeaderDefault)`
  min-height: 36%;
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
const PageNumberFraction = ({
  curPage,
  totalPages,
}: {
  curPage: number;
  totalPages: number;
}): ReactElement => {
  return (
    <>
      <Fraction>
        <PageNumber>{curPage}</PageNumber> / {totalPages}
      </Fraction>
    </>
  );
};

export interface SurveyProps {
  boldedWord: string; // the bolded word in the question
  headerSize?: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  Options: ReactElement;
  pageNumber: number;
  question: string;
  subHeader: string;
  totalPages: number;
}

const Survey = ({
  boldedWord,
  headerSize,
  onClick,
  Options,
  pageNumber,
  question,
  subHeader,
  totalPages,
}: SurveyProps): ReactElement => {
  const HeaderElm =
    headerSize === 1
      ? Header1
      : headerSize === 2
      ? Header2
      : headerSize === 3
      ? Header3
      : HeaderDefault;

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
        {pageNumber !== 1 && <SvgLeftArrow onClick={onClick} />}
        <PageNumberFraction curPage={pageNumber} totalPages={totalPages} />
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
