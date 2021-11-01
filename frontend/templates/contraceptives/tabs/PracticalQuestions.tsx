import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
`;

const Cost = styled.p`
  color: #1da3aa;
  font-size: 0.75rem;
  font-weight: bold;
  margin: 0rem;
`;

const Section = styled.div`
  align-self: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0.5rem;
`;

const StyledH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledLI = styled.li`
  color: gray;
  font-size: 0.7rem;
`;

const StyledP = styled.p`
  color: gray;
  font-size: 0.7rem;
  margin-top: 0rem;
`;

const StyledUL = styled.ul`
  margin: auto;
  margin-left: 1rem;
  padding-left: 0rem;
`;

export declare interface PracticalProps {
  access: Array<string>;
  administration: string;
  lowPrice: number;
  highPrice: number;
  costInfo: string;
}

const PracticalQuestions = ({
  access,
  administration,
  lowPrice,
  highPrice,
  costInfo,
}: PracticalProps) => {
  return (
    <Container>
      <Section>
        <StyledH2>Where to access?</StyledH2>
        <StyledP>{access[0]}</StyledP>
        <StyledUL>
          {access.map((description: string, index: number) => {
            return (
              index !== 0 && (
                <StyledLI key={description}>{description}</StyledLI>
              )
            );
          })}
        </StyledUL>
      </Section>
      <Section>
        <StyledH2>Who will administer this method?</StyledH2>
        <StyledP>{administration}</StyledP>
      </Section>
      <Section>
        <StyledH2>How much could it cost?</StyledH2>
        <Cost>
          ${lowPrice} - ${highPrice}
        </Cost>
        <StyledP>{costInfo}</StyledP>
      </Section>
    </Container>
  );
};

export default PracticalQuestions;
