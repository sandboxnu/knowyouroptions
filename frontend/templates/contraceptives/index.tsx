import React, { ReactElement, useState } from 'react';
import Overview, { OverviewProps } from './tabs/Overview';
import TabBar from '../TabBar';

export declare interface ContraceptivesProps {
  title: string;
  overviewProps: OverviewProps;
}

const Contraceptives = ({
  title,
  overviewProps,
}: ContraceptivesProps): ReactElement => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    'Overview',
    'Use',
    'Efficacy',
    'Effect',
    'Mechanism',
    'Practical Questions',
    'Additional',
  ];
  // states:
  // @ts-ignore
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <TabBar tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <div>
        <Overview {...overviewProps} />
      </div>
    </>
  );
};

export default Contraceptives;
