import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
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

const StyledP = styled.p`
  color: gray;
  font-size: 0.7rem;
  margin-top: 0rem;
`;

export declare interface AdditionalProps {
  info: Array<Array<string>>;
}

const AdditionalInfo = ({ info }: AdditionalProps) => {
  // Retrive info from database? idk
  return (
    <Container>
      <Section>
        <StyledH2>Things to notice about this method:</StyledH2>
        {info.map((section: Array<string>) => {
          return (
            <>
              <StyledH3>{section[0]}</StyledH3>
              <StyledP>{section[1]}</StyledP>
            </>
          );
        })}
      </Section>
    </Container>
  );
};

export default AdditionalInfo;
