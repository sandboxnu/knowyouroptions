import React, { ReactElement, useState } from 'react';
import Overview, { OverviewProps } from './tabs/Overview';
import Use, { UseProps } from './tabs/Use';
import TabBar from '../TabBar';
import Mechanism, { MechanismProps } from './tabs/Mechanism';
import PracticalQuestions, { PracticalProps } from './tabs/PracticalQuestions';
import AdditionalInfo, { AdditionalProps } from './tabs/AdditionalInfo';
import styled from 'styled-components';

// styled
const Container = styled.div`
  padding: 1rem;
`;

const Header = styled(Container)`
  background-color: pink;
`;

// components
export declare interface ContraceptivesProps {
  title: string;
  overviewProps: OverviewProps;
  mechanismProps: MechanismProps;
  practicalProps: PracticalProps;
  useProps: UseProps,
  additionalProps: AdditionalProps;
};

const Contraceptives = ({
  title,
  overviewProps,
  useProps,
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
    <Use {...useProps} />, // Use
    <div></div>, // Efficacy
    <div></div>, // Effect
    <Mechanism {...mechanismProps} />,
    <PracticalQuestions {...practicalProps} />,
    <AdditionalInfo {...additionalProps} />,
  ];
  // states:
  return (
    <>
      <Header>
        <h1>{title}</h1>
      </Header>
      <TabBar tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <Container>
        {tabComponents[tabIndex]}
      </Container>
    </>
  );
};

export default Contraceptives;
