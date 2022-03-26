import { ReactElement, useState } from 'react';
import * as compare from '../../pages/compare';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Collapse, Tabs } from 'antd';
import { colors } from '../../templates/mediaSizes';
import SvgRemoveImplant from '../../public/remove-implant.svg';
import SvgRollCondom from '../../public/roll-condom.svg';
//styling
const { Panel } = Collapse;

const BodyContainer = styled.body``;
const Container = styled.div`
  width: 80%;
  margin: 0;
  padding: 0;
  display: inline-block;
`;

const Header = styled.h1`
  padding-top: 1vh;
  padding-bottom: 3vh;
  text-align: center;
  margin: 0;
`;

const RemoveImplantImage = styled(SvgRemoveImplant)`
  display: block;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

const RollCondomImage = styled(SvgRollCondom)`
  display: block;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.p`
  color: ${colors.comparePageText};
  text-align: center;

  max-width: 400px;

  margin: 0 auto;

  flex-wrap: wrap;
`;
const ColorText = styled.p`
  color: #009ca3;
  padding: 0;
  margin: 0;
  display: inline-block;
`;
const BoldText = styled.p`
  font-weight: bold;
  padding: 0;
  margin: 0;
  display: inline-block;
`;

const PanelIndicator = styled.p`
  font-size: 60px;
  padding: 0;
  margin: 0;
`;

const NoSpaceRow = styled(Row)`
  padding: 0;
  margin: 0;
`;

const ListLetters = styled.ol`
  list-style-type: upper-alpha;
`;
const ListElement = styled.li`
  padding-left: 1%;
  max-width: 200px;
  padding-bottom: 1vh;
  margin-left: auto;
  margin-right: auto;
`;
const TextLong = styled.p`
  width: 60%;
  margin: auto;
`;
const Tabss = styled(Tabs)`
border-style: none;
.ant-tabs-ink-bar {
  height: 20px;
  background: #ffffff;
  !important;
  border-style: none;
  border-width: 0;
}
  .ant-tabs-tab.ant-tabs-tab-active  .ant-tabs-tab-btn {
    color: #89006C !important; 
    font-weight:bold;
    

    
 }
 .ant-tabs-tab-btn:hover {
  color: #89006C !important;
 }
 .ant-tabs-ink-bar::after {
 content: " ";
 position: absolute;
 left: 50%;
 right: 0;
 bottom: 0;
 height: 5px;
 background: #89006C;
 width: 80px;
 transform: translateX(-50%);
 font-size: 15pt;
 
 }
}


`;

export interface AboutUseProps {
  howItWorks: string;
  howItWorksRight: string;
  usePatternHighBound: number;
  usePatternHighBoundRight: number;
  usePatternUnits: string;
  usePatternUnitsRight: string;
}

const AboutUse = ({
  howItWorks,
  howItWorksRight,
  usePatternHighBound,
  usePatternHighBoundRight,
  usePatternUnits,
  usePatternUnitsRight,
}: AboutUseProps): ReactElement => {
  const Title = (title: string): ReactElement => {
    return <Col span={24}>{<Header>{title}</Header>}</Col>;
  };
  const ColText = (
    leftText: ReactElement,
    rightText: ReactElement,
  ): ReactElement => {
    return (
      <Row>
        <Col span={12}>{leftText}</Col>
        <Col span={12}>{rightText}</Col>
      </Row>
    );
  };
  return (
    <div>
      {Title('How To Use')}
      <Row>
        <Col span={12}>
          <RollCondomImage></RollCondomImage>
        </Col>
        <Col span={12}>
          <RemoveImplantImage></RemoveImplantImage>
        </Col>
      </Row>
      {ColText(<Text>{howItWorks}</Text>, <Text>{howItWorksRight}</Text>)}
      {Title('How often to use?')}
      {ColText(
        <Text>
          <BoldText>
            <ColorText>
              Lasts up to {usePatternHighBound} {usePatternUnits}
            </ColorText>
          </BoldText>
        </Text>,
        <Text>
          <BoldText>
            <ColorText>
              Lasts up to {usePatternHighBoundRight} {usePatternUnitsRight}
            </ColorText>
          </BoldText>
        </Text>,
      )}
      {ColText(
        <Text>
          Placed on male tip of the penis, roll it down over the length of the
          erect penis.
        </Text>,
        <Text>It is inserted under the skin of your upper arm.</Text>,
      )}
    </div>
  );
};
export default AboutUse;
