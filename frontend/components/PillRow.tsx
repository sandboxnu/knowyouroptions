import { ReactElement } from 'react';
import styled from 'styled-components';
import Pill from './Pill';

const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PillRow = ({
  className,
  pillTitles,
}: {
  className?: string;
  pillTitles: string[];
}): ReactElement => {
  return (
    <PillContainer className={className}>
      {pillTitles.map(
        (title: string): ReactElement => (
          <Pill key={title}>{title}</Pill>
        ),
      )}
    </PillContainer>
  );
};

export default PillRow;
