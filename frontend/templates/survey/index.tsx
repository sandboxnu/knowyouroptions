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
  height: 40%;
  padding: 1rem 1.5rem;
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
  color: gray;
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 300;
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
  onClick: React.MouseEventHandler<HTMLDivElement>;
  Options: ReactElement;
  pageNumber: number;
  question: string;
  smallHeader?: boolean;
}

const Survey = ({
  onClick,
  Options,
  pageNumber,
  question,
  smallHeader,
}: SurveyProps): ReactElement => {
  const HeaderElm = smallHeader ? HeaderSmall : Header;
  return (
    <Wrapper>
      <HeaderElm>
        <SvgLeftArrow onClick={onClick} />
        <PageNumberFraction number={pageNumber} />
        <Question> {question} </Question>
      </HeaderElm>

      <Content>{Options}</Content>
    </Wrapper>
  );
};

export default Survey;
