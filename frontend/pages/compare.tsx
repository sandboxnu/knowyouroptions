import { ReactElement, useState } from 'react';
import * as React from 'react';
import SvgSettingsIcon from '../public/desktop-icons/settings.svg';
import Layout from '../components/Layout';
import StyledDropdown from '../components/Dropdown';

import SvgAcne from '../public/acne.svg';
import SvgBed from '../public/bed.svg';
import SvgBreastFeeding from '../public/breastfeeding.svg';
import SvgBreastTenderness from '../public/breast-tenderness.svg';
import SvgCalendar from '../public/calendar.svg';
import SvgDepressed from '../public/depressed.svg';
import SvgDoctor from '../public/doctor.svg';
import SvgHeadache from '../public/headache.svg';
import SvgImplant from '../public/implant.svg';
import SvgImplantRemoval from '../public/implant-removal.svg';
import SvgPad from '../public/pad.svg';
import SvgTime from '../public/time.svg';
import 'antd/dist/antd.css';
import ContraceptiveTemplate from '../templates/contraceptives';
import { EffectProps } from '../templates/contraceptives/tabs/Effect';
import { EfficacyProps } from '../templates/contraceptives/tabs/Efficacy';
import { OverviewProps } from '../templates/contraceptives/tabs/Overview';
import { UseProps } from '../templates/contraceptives/tabs/Use';
import { MechanismProps } from '../templates/contraceptives/tabs/Mechanism';
import { PracticalProps } from '../templates/contraceptives/tabs/PracticalQuestions';
import { AdditionalProps } from '../templates/contraceptives/tabs/AdditionalInfo';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';
import { Collapse } from 'antd';
import { Row, Col } from 'antd';
import SvgRemoveImplant from '../public/remove-implant.svg';
import SvgRollCondom from '../public/roll-condom.svg';
import Column from 'antd/lib/table/Column';
import { colors } from '../templates/mediaSizes';

import axios from 'axios';
const { Panel } = Collapse;
const BodyContainer = styled.body``;
const Container = styled.div`
  width: 60%;
  margin: 0;
  padding: 0;
  display: inline-block;
`;
const EmptyContainer = styled.div``;

const CircleNumber = styled.div`
  height: 50px;
  width: 50px;
  display: inline-block;
  text-align: center;
  border-radius: 25px;
  background-color: #16999f;
  line-height: 50px; //same value as heights
  float: left;
  margin-left: 5%;
`;
const TextHeader = styled.p`
  font-size: 20px;
  color: ${colors.comparePageText};
  display: inline-block;
  margin: 0;
  padding-top: 8px;
  padding-left: 15px;
`;

const PanelDrop = styled(Panel)`
  background-color: white;
`;
const NumberText = styled.p`
  color: white;
`;
const Header = styled.h1`
  padding-top: 3vh;
  text-align: center;
`;

const RemoveImplantImage = styled(SvgRemoveImplant)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const RollCondomImage = styled(SvgRollCondom)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Text = styled.p`
  color: ${colors.comparePageText};
  text-align: center;
  padding-top: 2vh;
  padding-left: 7%;
  padding-right: 7%;
  max-width: 400px;
  margin: 0 auto;
  flex-wrap: wrap;
  align-content: center;
`;
const ColorText = styled.p`
  color: #009ca3;
`;
const BoldText = styled.p`
  font-weight: bold;
`;
const account = async () => {
  await axios.get('localhost:3001/contraceptve');
  console.log(axios.get('localhost:3001/contraceptve'));
};

// https://ant.design/components/tabs/ good to use for the Mechnanism tab
const Compare = (): ReactElement => {
  const [value, setValue] = useState<string | string[]>(['']);

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

  const headers = [
    {
      header: 'About use',
      reactContent: (
        <EmptyContainer>
          {Title('How To Use')}
          <Row>
            <Col span={12}>
              <RemoveImplantImage></RemoveImplantImage>
            </Col>
            <Col span={12}>
              <RollCondomImage></RollCondomImage>
            </Col>
          </Row>
          {ColText(
            <Text>
              Placed on male tip of the penis, roll it down over the length of
              the erect penis.
            </Text>,
            <Text>It is inserted under the skin of your upper arm.</Text>,
          )}
          {Title('How often to use?')}
          {ColText(
            <Text>
              <BoldText>
                <ColorText>Every time before sex</ColorText>
              </BoldText>
            </Text>,
            <Text>
              <BoldText>
                <ColorText>Last up to 5 years</ColorText>
              </BoldText>
            </Text>,
          )}
          {ColText(
            <Text>
              Placed on male tip of the penis, roll it down over the length of
              the erect penis.
            </Text>,
            <Text>It is inserted under the skin of your upper arm.</Text>,
          )}
        </EmptyContainer>
      ),
    },
    {
      header: 'Efficacy',
      reactContent: (
        <EmptyContainer>
          {Title('How well does it prevent preganancy?')}
        </EmptyContainer>
      ),
    },
    {
      header: 'Effect',
      reactContent: '',
    },
    {
      header: 'Mechanism',
      reactContent: '',
    },
    {
      header: 'Practical questions',
      reactContent: '',
    },
    {
      header: 'Additional information',
      reactContent: '',
    },
  ];

  return (
    <BodyContainer>
      <Collapse
        defaultActiveKey={['-1']}
        bordered={false}
        onChange={(e) => setValue(e)}
      >
        {headers.map((h, i) => (
          <PanelDrop
            showArrow={false}
            extra={
              <TextHeader>{value.includes(h.header) ? '-' : '+'}</TextHeader>
            }
            header={
              <Container>
                <TextHeader>{h.header}</TextHeader>
                <CircleNumber>
                  <NumberText>{i + 1 + ''}</NumberText>
                </CircleNumber>
              </Container>
            }
            key={i + ''}
          >
            {h.reactContent}
          </PanelDrop>
        ))}
      </Collapse>
      <Row></Row>
    </BodyContainer>
  );
};

export default Compare;
