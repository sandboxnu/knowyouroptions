import React, { ReactElement } from 'react';
import Overview, { OverviewProps } from './tabs/Overview'
import Use, { UseProps } from './tabs/Use';
import styled from 'styled-components';

const TabContainer = styled.div`
  margin: 1rem;
`;

export declare interface ContraceptivesProps {
  title: string,
  overviewProps: OverviewProps,
  useProps: UseProps,
};

const Contraceptives = ({
  title,
  overviewProps,
  useProps,
}: ContraceptivesProps): ReactElement => {
  // states:
  return (
    <>
      <TabContainer>
        <h1>{title}</h1>
      </TabContainer>
      <TabContainer>
        {/*<Overview {...overviewProps} />*/}
        <Use {...useProps} />
      </TabContainer>
    </>
  );
};

export default Contraceptives;