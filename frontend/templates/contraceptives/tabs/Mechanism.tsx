import React, { ReactElement } from 'react';
import styled from 'styled-components';

// Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
`;

const HighlightedSymptoms = styled.span`
  background-color: transparent;
  color: #1da3aa;
  font-size: 0.7rem;
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
`;

const StyledH3 = styled.h3`
  font-size: 0.75rem;
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

const Warning = styled.p`
  color: black;
  font-size: 0.7rem;
  font-style: italic;
  font-weight: bold;
`;

// Components

export declare interface MechanismProps {
  mechanism: string;
  healthRisk: Array<string>;
  whoCantUse: Array<string>;
  warning?: string;
}

const Mechanism = ({
  mechanism,
  healthRisk,
  whoCantUse,
  warning = '',
}: MechanismProps): ReactElement => {
  // TODO: add highlighting keywords for healthRisk
  return (
    <Container>
      <Section>
        <StyledH2>How it works?</StyledH2>
        <StyledP>{mechanism}</StyledP>
      </Section>
      <Section>
        <StyledH2>Health Risk</StyledH2>
        <StyledP>
          {healthRisk.map((phrase: string, index: number) => {
            return index % 2 === 0 ? (
              phrase
            ) : (
              <HighlightedSymptoms key={phrase}>{phrase}</HighlightedSymptoms>
            );
          })}
        </StyledP>
      </Section>
      <Section>
        <StyledH2>Who can't use?</StyledH2>
        <StyledH3>Medical history / illness</StyledH3>
        <StyledP>{whoCantUse[0]}</StyledP>
        <StyledUL>
          {whoCantUse.map((description: string, index: number) => {
            return (
              index !== 0 && (
                <StyledLI key={description}>{description}</StyledLI>
              )
            );
          })}
        </StyledUL>
        {warning !== '' && <Warning>{warning}</Warning>}
      </Section>
    </Container>
  );
};

export default Mechanism;
