import React from 'react';
import styled from 'styled-components';
import {
  Description,
  DescriptionBold,
  List,
  ListItem,
  Subtitle,
} from './StyledComponents';

const Cost = styled(DescriptionBold)`
  color: #1da3aa;
  margin-bottom: 0rem;
`;

const CostDescription = styled(Description)`
  margin-top: 0rem;
`;

export interface PracticalProps {
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
    <>
      <Subtitle>Where to access?</Subtitle>
      <Description>{access[0]}</Description>
      <List>
        {access.map((description: string, index: number) => {
          return (
            index !== 0 && <ListItem key={description}>{description}</ListItem>
          );
        })}
      </List>
      <Subtitle>Who will administer this method?</Subtitle>
      <Description>{administration}</Description>
      <Subtitle>How much could it cost?</Subtitle>
      <Cost>
        $ {lowPrice} — $ {highPrice}.
      </Cost>
      <CostDescription>{costInfo}</CostDescription>
    </>
  );
};

export default PracticalQuestions;
