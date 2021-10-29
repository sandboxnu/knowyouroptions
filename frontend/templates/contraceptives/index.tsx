import React, { ReactElement, useState } from 'react';
import Overview, { OverviewProps } from './tabs/Overview';
import TabBar from '../TabBar';
import Mechanism, { MechanismProps } from './tabs/Mechanism';
import PracticalQuestions, { PracticalProps } from './tabs/PracticalQuestions';
import AdditionalInfo, { AdditionalProps } from './tabs/AdditionalInfo';

export declare interface ContraceptivesProps {
  title: string;
  overviewProps: OverviewProps;
  mechanismProps: MechanismProps;
  practicalProps: PracticalProps;
  additionalProps: AdditionalProps;
}

const Contraceptives = ({
  title,
  overviewProps,
  mechanismProps,
  practicalProps,
  additionalProps,
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
  const tabComponents = [
    <Overview {...overviewProps} />,
    <div></div>, // Use
    <div></div>, // Efficacy
    <div></div>, // Effect
    <Mechanism {...mechanismProps} />,
    <PracticalQuestions {...practicalProps} />,
    <AdditionalInfo {...additionalProps} />,
  ];
  // states:
  // @ts-ignore
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <TabBar tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <div>{tabComponents[tabIndex]}</div>
    </>
  );
};

export default Contraceptives;
