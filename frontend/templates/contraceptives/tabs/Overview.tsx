import { ReactElement } from 'react';
import styled from 'styled-components';
import PillRow from '../../../components/PillRow';

import {Column, Row} from './StyledComponents';

// Styling
const CategoryRow = styled(Row)`
  column-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
  row-gap: 1rem;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  color: #bebebe;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;

const CategoryValue = styled.p`
  color: #4b4b4b;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
`;

const Description = styled.p`
  color: #7c7c7c;
`;

// Components
const Category = ({
  title,
  value,
}: {
  title: string;
  value: string;
}): ReactElement => {
  return (
    <Column>
      <CategoryValue>{value}</CategoryValue>
      <CategoryTitle>{title}</CategoryTitle>
    </Column>
  );
};

export interface OverviewProps {
  description: string;
  // info: string[]<[category: string, value: string]>
  info: Array<string[]>;
  pillTitles: string[];
}

const Overview = ({
  description,
  info,
  pillTitles,
}: OverviewProps): ReactElement => {
  return (
    <>
      <CategoryRow>
        {info.map(
          ([category, value]: string[]): ReactElement => (
            <Category key={category} title={category} value={value} />
          ),
        )}
      </CategoryRow>
      <PillRow pillTitles={pillTitles} />
      <Description>{description}</Description>
    </>
  );
};

export default Overview;
