import { ReactElement } from 'react';
import styled from 'styled-components';
import { Column } from '../templates/contraceptives/tabs/StyledComponents';
import { device } from '../templates/mediaSizes';

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

  @media ${device.laptop} {
    margin: 0.5rem 0;
  }
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

export default Category;
