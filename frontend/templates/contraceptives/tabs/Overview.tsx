import { ReactElement } from 'react';
import { Column, Row } from './StyledComponents';
import { device } from '../../mediaSizes';
import styled from 'styled-components';
import PillRow from '../../../components/PillRow';
import Category from '../../../components/Category';

// Styling
const CategoryRow = styled(Row)`
  column-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
  row-gap: 1rem;
  width: 100%;
`;

const Description = styled.p`
  color: #7c7c7c;

  @media ${device.laptop} {
    margin: 2rem 0rem;
    width: 33vw;
  }
`;

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
