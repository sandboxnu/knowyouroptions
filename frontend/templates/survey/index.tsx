import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

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
  height: 40%;
`;

const HeaderSmall = styled(Container)`
  height: 35%;
`;

const PageNumber = styled.span`
  color: black;
  font-size: 2rem;
  font-weight: bold;
`;

const Question = styled.h1`
  font-size: 2rem;
  font-weight: normal;
`;

const Wrapper = styled.div`
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
  Options: ReactElement;
  pageNumber: number;
  question: string;
  smallHeader?: boolean;
}

const Survey = ({
  Options,
  pageNumber,
  question,
  smallHeader,
}: SurveyProps): ReactElement => {
  const HeaderElm = smallHeader? HeaderSmall : Header
  const [curPage, setCurPage] = useState(0);
  return (
    <Wrapper>
      <HeaderElm>
        <PageNumberFraction number={pageNumber} />
        <Question> {question} </Question>
      </HeaderElm>

      <Content>{Options}</Content>
    </Wrapper>
  );
};

export default Survey;
