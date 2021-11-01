import { ReactElement } from 'react';
import styled from 'styled-components';
import Pill from './Pill';

const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PillContainerStyled = styled(PillContainer)`
  &>div {
    padding: .25rem;
  }
`;

const PillRow = ({
  className,
  pillTitles,
}: {
  className?: string,
  pillTitles: string[],
}): ReactElement  => {
  const Container = className === undefined? PillContainerStyled : PillContainer;
  return (
    <Container className={className}>
      {pillTitles.map((title: string): ReactElement =>
        <Pill key={title}>{title}</Pill>)
      }
    </Container>
  );
};

export default PillRow;
