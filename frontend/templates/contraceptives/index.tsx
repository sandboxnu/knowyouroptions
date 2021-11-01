import React, { ReactElement, useState } from 'react';
import Efficacy, { EfficacyProps } from './tabs/Efficacy';
import Effect, { EffectProps } from './tabs/Effect';
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
  background-color: #FEBBA8;
`;

// components
export declare interface ContraceptivesProps {
  SvgContraceptive: ReactElement;
  effectProps: EffectProps;
  efficacyProps: EfficacyProps;
  title: string;
  overviewProps: OverviewProps;
  mechanismProps: MechanismProps;
  practicalProps: PracticalProps;
  useProps: UseProps,
  additionalProps: AdditionalProps;
};

const Contraceptives = ({
  SvgContraceptive,
  title,
  effectProps,
  efficacyProps,
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
    <Use {...useProps} />,
    <Efficacy {...efficacyProps} />,
    <Effect {...effectProps} />,
    <Mechanism {...mechanismProps} />,
    <PracticalQuestions {...practicalProps} />,
    <AdditionalInfo {...additionalProps} />,
  ];

  return (
    <>
      <Header>
        {tabIndex===0 && SvgContraceptive}
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
