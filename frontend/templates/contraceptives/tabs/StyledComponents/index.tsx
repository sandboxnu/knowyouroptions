import styled from 'styled-components';
import { ReactElement } from 'react';

const CategoryValueNumber = styled.span`
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

const CategoryValue = ({
  className,
  unit,
  value,
}: {
  className?: string,
  unit: string,
  value: string,
}): ReactElement => {
  return (
    <>
      <CategoryValueP className={className}>
        <CategoryValueNumber>
          {value}
        </CategoryValueNumber>
        {unit}
      </CategoryValueP>
    </>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  color: #7c7c7c;
`;

const DescriptionBold = styled(Description)`
  color: black;
  font-weight: bold;
`;

const List = styled.ul`
  padding-left: 1.25rem;

  li::marker {
    color: #1da3aa;
  }
`;

const ListItem = styled.li`
  color: #7c7c7c;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Subtitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export {
  CategoryValue,
  Column,
  Description,
  DescriptionBold,
  List,
  ListItem,
  Row,
  Subtitle
};
