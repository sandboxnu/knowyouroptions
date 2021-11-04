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
import { Column, Row } from './tabs/StyledComponents';
import SvgBookmark from '../../public/bookmark.svg';

// styled
const Bookmark = styled(SvgBookmark)`
  fill: white;
  position: relative;
  stroke: black;
  top: 2px;
`;

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
  display: flex;
  flex-direction: row;
`;

const SvgCircle = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 0.7rem 0.9rem 0.6rem 0.9rem;

  :hover {
    cursor: pointer;

    ${Bookmark} {
      fill: purple;
    }
  }
`;

const SvgColumn = styled(Column)`
  margin-left: auto;

  ${SvgCircle} {
    margin-top: 0.5rem;
  }
`;

const SvgRow = styled(Row)`
  margin-left: auto;
  margin-top: auto;

  ${SvgCircle} {
    margin-left: 0.5rem;
  }
`;

const Title = styled.h1`
  margin: 0;
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
  const BookmarkIcon = (
    <SvgCircle>
      <Bookmark />
    </SvgCircle>
  );
  return (
    <>
      <Header>
        <div>
          {tabIndex === 0 && SvgContraceptive}
          <Title>{title}</Title>
        </div>
        {tabIndex === 0 ? (
          <SvgColumn>
            {BookmarkIcon}
            {BookmarkIcon}
          </SvgColumn>
        ) : (
          <SvgRow>
            {BookmarkIcon}
            {BookmarkIcon}
          </SvgRow>
        )}
      </Header>
      <TabBar tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <Container>{tabComponents[tabIndex]}</Container>
      {/*tabIndex < tabs.length - 1 && (
        <DownArrow onClick={() => setTabIndex(tabIndex + 1)} />
      )*/}
    </>
  );
};

export default Contraceptives;
