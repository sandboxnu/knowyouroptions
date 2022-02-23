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
  height: 44%;
  padding: 1rem 1.5rem;
`;

const Header1 = styled(HeaderDefault)`
  height: 41%;
`;

const Header2 = styled(HeaderDefault)`
  height: 39%;
`;

const Header3 = styled(HeaderDefault)`
  height: 36%;
`;

const PageNumber = styled.span`
  color: black;
  font-size: 2rem;
  font-weight: bold;
`;

const Question = styled.h1`
  color: gray;
  font-family: 'Roboto';
  font-size: 1.75rem;
  font-weight: 300;
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
  headerSize?: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  Options: ReactElement;
  pageNumber: number;
  question: string;
  totalPages: number;
}

const Survey = ({
  headerSize,
  onClick,
  Options,
  pageNumber,
  question,
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
  return (
    <Wrapper>
      <HeaderElm>
        <SvgLeftArrow onClick={onClick} />
        <PageNumberFraction curPage={pageNumber} totalPages={totalPages} />
        <Question> {question} </Question>
      </HeaderElm>

      <Content>{Options}</Content>
    </Wrapper>
  );
};

export default Survey;
