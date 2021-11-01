import { ReactElement } from 'react';
import styled from 'styled-components';
import PillRow from '../../../components/PillRow';

// Styling
const CategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  color: #BEBEBE;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;

const CategoryValue = styled.span`
  color: #1DA3AA;
  font-size: 2rem;
  font-weight: normal;
  margin: 0 .25rem 0 0;
`;

const CategoryValueP = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  color: #7C7C7C;
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
  className?: string,
  title: string,
  unit: string,
  value: number,
}): ReactElement => {
  return (
    <Column className={className}>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryValueP>
        <CategoryValue>
          {value}
        </CategoryValue>
        {unit}
      </CategoryValueP>
    </Column>
  );
};

const CategoryLeft = styled(Category)`
  border-right: 2px dashed lightgray;
  margin-right: 2rem;
  padding-right: 2rem;
`;

export declare interface UseProps {
  careFreeFor: number,
  howToUseDesc: string,
  howToUsePills: string[],
  ifMissedRoutineDesc: string,
  lastsUpTo: number,
};

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
        <CategoryLeft title={"Lasts up to"} unit={"years"} value={lastsUpTo} />
        <Category title={"Care-free for"} unit={"years"} value={careFreeFor} />
      </CategoryRow>
      <h3>What if I missed once in the routine or made any mistake?</h3>
      <Description>{ifMissedRoutineDesc}</Description>
    </>
  );
};

export default Use;
