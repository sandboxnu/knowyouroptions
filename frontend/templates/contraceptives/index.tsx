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
import DownOutlined from '@ant-design/icons/DownOutlined';

// styled
const Container = styled.div`
  padding: 1rem;
`;

const DownArrow = styled(DownOutlined)`
  position: absolute;
  bottom: 1rem;
  left: 50%;
`;

const Header = styled(Container)`
  background-color: #febba8;
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
  useProps: UseProps;
  additionalProps: AdditionalProps;
}

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
      <Container>{tabComponents[tabIndex]}</Container>
      {tabIndex < tabs.length - 1 && (
        <DownArrow onClick={() => setTabIndex(tabIndex + 1)} />
      )}
    </>
  );
};

export default Contraceptives;
