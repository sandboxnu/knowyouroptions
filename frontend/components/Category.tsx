import { ReactElement } from 'react';
import styled from 'styled-components';
import { Column } from '../templates/contraceptives/tabs/StyledComponents';
import { device } from '../templates/mediaSizes';

const CategoryTitle = styled.h3`
  margin: 0;
`;

const CategoryValue = styled.p`
  margin: 0;

  @media ${device.laptop} {
    margin: 0.5rem 0;
  }
`;

// Components
const Category = ({
  title,
  titleClass = 'lightGray subtitle2',
  value,
  valueClass = 'gray title1',
}: {
  title: string;
  titleClass?: string;
  value: string;
  valueClass?: string;
}): ReactElement => {
  return (
    <Column>
      <CategoryValue className={valueClass}>{value}</CategoryValue>
      <CategoryTitle className={titleClass}>{title}</CategoryTitle>
    </Column>
  );
};

export default Category;
