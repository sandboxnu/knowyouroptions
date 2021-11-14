import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

// styled
const Container = styled.div`
  padding: 1rem;
`;

const Content = styled(Container)`
  background-color: #febba8;
  height: 100%;
  padding: 1rem 1rem;
`;

const Fraction = styled.p`
  color: gray;
  font-size: 1.2rem;
`;

const Header = styled(Container)`
  height: 40%;
  padding: 1rem 1.5rem;
`;

const PageNumber = styled.span`
  color: black;
  font-size: 2rem;
  font-weight: bold;
`;

const Question = styled.h1`
  color: gray;
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 300;
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
}

const Survey = ({
  Options,
  pageNumber,
  question,
}: SurveyProps): ReactElement => {
  return (
    <Wrapper>
      <Header>
        <PageNumberFraction number={pageNumber} />
        <Question> {question} </Question>
      </Header>

      <Content>{Options}</Content>
    </Wrapper>
  );
};

export default Survey;
