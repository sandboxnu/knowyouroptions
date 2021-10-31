import { ReactElement } from 'react';
import styled from 'styled-components';
import PillRow from '../../../components/PillRow';

// Styling
const CategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  color: #BEBEBE;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;

const CategoryValue = styled.p`
  color: #4B4B4B;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  color: #7C7C7C;
`;

// Components
const Category = ({
  title,
  value
}: {
  title: string,
  value: string
}): ReactElement => {
  return (
    <Column>
      <CategoryValue>{value}</CategoryValue>
      <CategoryTitle>{title}</CategoryTitle>
    </Column>
  )
}

export declare interface OverviewProps {
  description: string,
  // info: string[]<[category: string, value: string]>
  info: Array<string[]>,
  pillTitles: string[]
};

const Overview = ({
  description,
  info,
  pillTitles
}: OverviewProps): ReactElement => {
  return (
    <>
      <CategoryRow>
        {info.map(([category, value]: string[]): ReactElement =>
            <Category title={category} value={value}/>
        )}
      </CategoryRow>
      <PillRow pillTitles={pillTitles} />
      <Description>
        {description}
      </Description>
    </>
  );
};

export default Overview;
