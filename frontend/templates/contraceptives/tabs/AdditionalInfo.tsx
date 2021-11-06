import React from 'react';
import styled from 'styled-components';
import { Description, DescriptionBold, Subtitle } from './StyledComponents';

const Section = styled.div`
  margin-bottom: 2rem;
`;

export declare interface AdditionalProps {
  info: Array<Array<string>>;
}

const AdditionalInfo = ({ info }: AdditionalProps) => {
  return (
    <>
      <Subtitle>Things to notice about this method:</Subtitle>
      {info.map((section: Array<string>) => {
        return (
          <Section key={section[0]}>
            <DescriptionBold>{section[0]}</DescriptionBold>
            <Description>{section[1]}</Description>
          </Section>
        );
      })}
    </>
  );
};

export default AdditionalInfo;
