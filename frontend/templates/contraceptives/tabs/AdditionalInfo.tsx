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
  needles?: boolean;
  beliefs?: string;
}

const AdditionalInfo = ({
  needles = false,
  beliefs = 'Some forms of birth control are considered a violation of certain religious rights or cultural traditions. Weigh the risks and benefits of a birth control method against your personal convictions.',
}: AdditionalProps) => {
  // Retrive info from database? idk
  return (
    <Container>
      <StyledH2>Things to notice about this method:</StyledH2>
      {needles && <StyledH3>Needle phobia</StyledH3>}
      {needles && (
        <StyledP>
          Needles will be included in the inserting process. If you don't feel
          comfortable with that, please inform your doctor in advance.
        </StyledP>
      )}
      <StyledH3>
        Is it compatible with your religious beliefs or cultural practices?
      </StyledH3>
      <StyledP>{beliefs}</StyledP>
    </Container>
  );
};

export default AdditionalInfo;
