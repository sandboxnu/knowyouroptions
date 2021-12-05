import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  Description,
  DescriptionBold,
  HighlightDescription,
  List,
  ListItem,
  Subtitle,
} from './StyledComponents';

// Styling

const Warning = styled(DescriptionBold)`
  font-style: italic;
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
    <>
      <Subtitle>How it works?</Subtitle>
      <Description>{mechanism}</Description>
      <Subtitle>Health Risk</Subtitle>
      <Description>
        <HighlightDescription description={healthRisk} />
      </Description>
      <Subtitle>Who can't use?</Subtitle>
      <DescriptionBold>Medical history / illness</DescriptionBold>
      <Description>{whoCantUse[0]}</Description>
      <List>
        {whoCantUse.map((description: string, index: number) => {
          return (
            index !== 0 && <ListItem key={description}>{description}</ListItem>
          );
        })}
      </List>
      {warning !== '' && <Warning>{warning}</Warning>}
    </>
  );
};

export default Mechanism;
