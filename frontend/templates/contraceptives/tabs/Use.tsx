import { ReactElement } from 'react';
import styled from 'styled-components';
import PillRow from '../../../components/PillRow';
import { CategoryValue, Column, Description } from './StyledComponents';

// Styling
const CategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  color: #bebebe;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;

const HowOftenTitle = styled.h3`
  margin-top: 2rem;
`;

// Components
const Category = ({
  className,
  title,
  unit,
  value,
}: {
  className?: string;
  title: string;
  unit: string;
  value: number;
}): ReactElement => {
  return (
    <Column className={className}>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryValue unit={unit} value={value.toString()} />
    </Column>
  );
};

const CategoryLeft = styled(Category)`
  border-right: 2px dashed lightgray;
  margin-right: 2rem;
  padding-right: 2rem;
`;

export interface UseProps {
  careFreeFor: [number, string];
  howToUseDesc: string;
  howToUsePills: string[];
  ifMissedRoutineDesc: string;
  lastsUpTo: [number, string];
}

const Use = ({
  careFreeFor,
  howToUseDesc,
  howToUsePills,
  ifMissedRoutineDesc,
  lastsUpTo,
}: UseProps): ReactElement => {
  return (
    <>
      <h3>How to use it?</h3>
      <PillRow pillTitles={howToUsePills} />
      <Description>{howToUseDesc}</Description>
      <HowOftenTitle>How often do I have to remember it?</HowOftenTitle>
      <CategoryRow>
        <CategoryLeft
          title={'Lasts up to'}
          unit={lastsUpTo[1]}
          value={lastsUpTo[0]}
        />
        <Category
          title={'Care-free for'}
          unit={careFreeFor[1]}
          value={careFreeFor[0]}
        />
      </CategoryRow>
      <h3>What if I missed once in the routine or made any mistake?</h3>
      <Description>{ifMissedRoutineDesc}</Description>
    </>
  );
};

export default Use;
