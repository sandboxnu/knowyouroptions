import React, { ReactElement, useEffect, useState } from 'react';
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
import { device } from '../../pages/mediaSizes';

// styled
const Container = styled.div`
  padding: 1rem;
`;

const Body = styled(Container)`
  @media ${device.laptop} {
    padding: 1rem 3rem;
    width: 65vw;
  }
`;

const Bookmark = styled(SvgBookmark)`
  fill: white;
  position: relative;
  stroke: black;
  top: 2px;
  @media ${device.laptop} {
    display: none;
  }
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

  @media ${device.laptop} {
    height: 57vh;
  }
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
  @media ${device.laptop} {
    display: none;
  }
`;

const SvgCircleSecond = styled(SvgCircle)``;

const SvgColumn = styled(Column)`
  margin-left: auto;

  ${SvgCircleSecond} {
    margin-top: 0.5rem;
  }
`;

const SvgRow = styled(Row)`
  margin-left: auto;
  margin-top: auto;

  ${SvgCircleSecond} {
    margin-left: 0.5rem;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

// components
export interface ContraceptivesProps {
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
  const [isMobile, changeIsMobile] = useState(false);
  let width = 0;

  //const {width, height} = useWindowDimensions();

  useEffect(() => {});

  useEffect(() => {
    width = window?.innerWidth;
    if (width > 600) {
      changeIsMobile(false);
    } else {
      changeIsMobile(true);
    }
  }, []);

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
  const CompareMethodsIcon = (
    <SvgCircleSecond>
      <Bookmark />
    </SvgCircleSecond>
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
            {CompareMethodsIcon}
          </SvgColumn>
        ) : (
          <SvgRow>
            {BookmarkIcon}
            {CompareMethodsIcon}
          </SvgRow>
        )}
      </Header>

      {
        isMobile ? '' : ''
        //reserved for displaying things based off view (js way)
      }
      <TabBar tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <Container>{tabComponents[tabIndex]}</Container>

      {/*tabIndex < tabs.length - 1 && (
        <DownArrow onClick={() => setTabIndex(tabIndex + 1)} />
      )*/}
    </>
  );
};

export default Contraceptives;
