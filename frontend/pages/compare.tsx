import { ReactElement, useState } from 'react';
import * as React from 'react';
import { Contraceptive } from '../../backend/src/entities/contraceptive.entity';
import SvgSettingsIcon from '../public/desktop-icons/settings.svg';
import Layout from '../components/Layout';
import StyledDropdown from '../components/Dropdown';
import AboutUse, { AboutUseProps } from '../templates/compare/AboutUse';
import SvgAcne from '../public/acne.svg';

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
import { Collapse, Tabs } from 'antd';
import { Row, Col } from 'antd';
import SvgRemoveImplant from '../public/remove-implant.svg';
import SvgRollCondom from '../public/roll-condom.svg';
import SvgPullCondom from '../public/pull-condom.svg';
import SvgBed from '../public/bed-image.svg';
import SvgSave from '../public/save.svg';
import Column from 'antd/lib/table/Column';
import SvgPlus from '../public/plus.svg';
import SvgMinus from '../public/minus.svg';
import { colors } from '../templates/mediaSizes';
import axios from 'axios';
import Contraceptives from '../templates/contraceptives';
import Category from '../components/Category';
import AdditionalInformation, {
  AdditionalInfoProps,
} from '../templates/compare/AdditonalInformation';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const BodyContainer = styled.body``;
const Container = styled.div`
  width: 80%;
  margin: 0;
  padding: 0;
  display: inline-block;
`;
export const Text = styled.p`
  max-width: 400px;
  margin: 0 auto;
  color: #808080;
`;

const EmptyContainer = styled.div``;

const DropdownContainer = styled(Row)`
  justify-content: center;
  gap: 19%;
  padding: 100px;
`;

const CircleNumber = styled.div`
  height: 50px;
  width: 50px;
  display: inline-block;
  text-align: center;
  border-radius: 25px;
  background-color: #16999f;
  line-height: 50px; //same value as heights
  float: left;
  margin-left: 3%;
`;

const TextHeader = styled.p`
  font-size: 20px;
  color: ${colors.comparePageText};
  display: inline-block;
  margin: 0;
  padding-top: 8px;
  padding-left: 15px;
  font-weight: bold;
`;

const PanelDrop = styled(Panel)`
  background-color: white;
  padding: 2vh;
`;

const NumberText = styled.p`
  color: white;
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

const PullCondomImage = styled(SvgPullCondom)`
  display: block;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

const BedImage = styled(SvgBed)`
  display: block;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

const SaveImage = styled(SvgSave)`
  display: block;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

const PlusImage = styled(SvgPlus)`
  fill: ${colors.comparePageText};
`;

const MinusImage = styled(SvgMinus)`
  fill: ${colors.comparePageText};
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

const StatText = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
`;

const NoSpaceText = styled.p`
  color: ${colors.comparePageText};
  text-align: center;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-bottom: 6vh;
`;

const NoSpaceRow = styled(Row)`
  padding: 0;
  margin: 0;
`;

const api = axios.create({
  baseURL: 'http://localhost:3001/contraceptive',
});

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
const TextPurple = styled.p``;

const CeneteredContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

const ListBullets = styled.ol`
  list-style-type: disc;
  display: block;

  margin-left: auto;
  margin-right: auto;
`;
const TextLeft = styled.p`
  text-align: left;
  color: ${colors.comparePageText};
`;
const TitleL = styled.h1`
  color: #009ca3;
`;

type CompareProps = {
  contraceptives: [Contraceptive];
};

// https://ant.design/components/tabs/ good to use for the Mechnanism tab
const Compare = (compareProps: CompareProps): ReactElement => {
  const { contraceptives } = compareProps;
  const [value, setValue] = useState<string | string[]>(['']);
  // Indicies of selected methods
  const [method1, setMethod1] = useState<number>(-1);
  const [method2, setMethod2] = useState<number>(-1);

  const AboutUses: AboutUseProps = {
    howItWorks: contraceptives[method1]?.howItWorks,
    howItWorksRight: contraceptives[method2]?.howItWorks,
    usePatternHighBound: contraceptives[method1]?.usePatternHighBound,
    usePatternHighBoundRight: contraceptives[method2]?.usePatternHighBound,
    usePatternUnits: contraceptives[method1]?.usePatternUnits,
    usePatternUnitsRight: contraceptives[method2]?.usePatternUnits,
  };

  const AdditionalInfoProps: AdditionalInfoProps = {
    thingsToKnowLeft: contraceptives[method1]?.thingsToKnow,
    thingsToKnowRight: contraceptives[method2]?.thingsToKnow,
  };

  const SummaryItem = (props): ReactElement => {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    );
  };

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
      reactContent: <AboutUse {...AboutUses} />,
    },
    {
      header: 'Efficacy',
      reactContent: (
        <EmptyContainer>
          {Title('How well does it prevent preganancy?')}
          <NoSpaceRow>
            <Col span={12}>
              {
                <StatText>
                  <ColorText>99%</ColorText>
                </StatText>
              }
            </Col>
            <Col span={12}>
              {
                <StatText>
                  <ColorText>99%</ColorText>
                </StatText>
              }
            </Col>
          </NoSpaceRow>
          <NoSpaceRow>
            <Col span={12}>
              <NoSpaceText>Effective</NoSpaceText>
            </Col>
            <Col span={12}>
              <NoSpaceText>Effective</NoSpaceText>
            </Col>
          </NoSpaceRow>
          {Title('When does it start to work?')}
          {ColText(
            <Text>
              <ColorText>Every time</ColorText> if the condom is placed and used
              correctly
            </Text>,
            <ListLetters>
              <ListElement>
                <ColorText>Immediately</ColorText> if the implant is fitted
                during the{' '}
                <ColorText>first 5 days of your menstrual cycle</ColorText>
              </ListElement>
              <ListElement>
                <ColorText>After a week of additional contraception</ColorText>{' '}
                if the implant is fitted on any other day of your menstrual
                cycle
              </ListElement>
            </ListLetters>,
          )}
          {Title('Getting back to fertility')}
          {ColText(
            <PullCondomImage></PullCondomImage>,
            <RemoveImplantImage></RemoveImplantImage>,
          )}
          {ColText(
            <Text>
              Once the use of condom stops, you can immediately get back to
              pregnancy.
            </Text>,
            <Text>
              Once the implant is removed your ability to get pregnant quickly
              returns.
            </Text>,
          )}
        </EmptyContainer>
      ),
    },
    {
      header: 'Effect',
      reactContent: (
        <EmptyContainer>
          {Title('Non-contraceptive benefits')}
          <Row>
            <Col span={6}>
              <BedImage></BedImage>
            </Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <BedImage></BedImage>
            </Col>
            <Col span={6}></Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
            <Col span={6}></Col>
          </Row>
          {Title('Side effects')}
          <Row>
            <Col span={6}>
              <BedImage></BedImage>
            </Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
            <Col span={6}>
              <SaveImage></SaveImage>
            </Col>
          </Row>
        </EmptyContainer>
      ),
    },
    {
      header: 'Mechanism',
      reactContent: (
        <EmptyContainer>
          {Title('How it works?')}
          <Tabss defaultActiveKey="1" centered>
            <TabPane tab={<TextPurple>Condom</TextPurple>} key="1">
              <TextLong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                varius libero. Sed eu laoreet mauris, ac interdum enim.{' '}
              </TextLong>
            </TabPane>
            <TabPane tab={<TextPurple>Implant</TextPurple>} key="2">
              <TextLong>
                The implant releases the hormone progestogen into your
                bloodstream, which prevents the release of an egg each month
                (ovulation) to prevent pregnancy.
              </TextLong>
            </TabPane>
          </Tabss>
          {Title('Health Risk')}
          <Tabss defaultActiveKey="1" centered>
            <TabPane tab={<TextPurple>Condom</TextPurple>} key="1">
              <TextLong>
                Reactions to latex can include rash, hives, runny nose, and in
                severe cases tightening of the airways and loss of blood
                pressure. If you or your partner is allergic to latex, a
                polyurethane or lambskin condom may be an alternative. * Tell
                your doctor or nurse if you have any unexpected symptoms while
                using Nexplanon.{' '}
              </TextLong>
            </TabPane>
            <TabPane tab={<TextPurple>Implant</TextPurple>} key="2">
              <TextLong>
                The implant releases the hormone progestogen into your
                bloodstream, which prevents the release of an egg each month
                (ovulation) to prevent pregnancy.
              </TextLong>
            </TabPane>
          </Tabss>
          {Title("Who Can't Use")}
          <Text>
            Check with your doctor on your medical history and see if the
            methods are appropriate with your health condition.
          </Text>
        </EmptyContainer>
      ),
    },
    {
      header: 'Practical questions',
      reactContent: (
        <EmptyContainer>
          {Title('Where to access?')}
          {ColText(
            <ListBullets>
              <ListElement>
                <TextLeft>Drug Store</TextLeft>
              </ListElement>
              <ListElement>
                <TextLeft>Contraception clinics</TextLeft>
              </ListElement>
              <ListElement>
                <TextLeft>Sexual health clinics</TextLeft>
              </ListElement>
            </ListBullets>,
            <ListBullets>
              <ListElement>
                <TextLeft>Drug Store</TextLeft>
              </ListElement>
              <ListElement>
                <TextLeft>Contraception clinics</TextLeft>
              </ListElement>
              <ListElement>
                <TextLeft>Sexual health clinics</TextLeft>
              </ListElement>
            </ListBullets>,
          )}
          {Title('Who will administer this method?')}
          {ColText(
            <Text>
              Purchased <ColorText>over-the-counter</ColorText> at drugstores
            </Text>,
            <Text>
              Put in by <ColorText>doctor or nurse.</ColorText>
            </Text>,
          )}
          {Title('How much could it cost?')}
          {ColText(
            <CeneteredContainer>
              <ColorText>$ 0 - $ 3</ColorText>
            </CeneteredContainer>,
            <CeneteredContainer>
              <ColorText>$ 0 - $ 1,300</ColorText>
            </CeneteredContainer>,
          )}
          {ColText(
            <CeneteredContainer>
              <TextLeft>Price may vary from geographic regions</TextLeft>
            </CeneteredContainer>,
            <CeneteredContainer>
              <TextLeft>
                Price may vary from geographic regions and health insurers
              </TextLeft>
            </CeneteredContainer>,
          )}
        </EmptyContainer>
      ),
    },
    {
      header: 'Additional information',
      reactContent: <AdditionalInformation {...AdditionalInfoProps} />,
    },
  ];

  return (
    <BodyContainer>
      <Row>
        <Col span="9" offset={2}>
          <StyledDropdown
            title={contraceptives[method1]?.name ?? 'Method 1'}
            menuItemInfos={contraceptives.map((c) => {
              return {
                title: c.name,
                action: setMethod1,
              };
            })}
          />
          <Category
            value={`${contraceptives[method1]?.effectiveRate}% Effective`}
            valueClass="teal title1"
            title="Efficacy"
            titleClass="lightGray subtitle1"
          />
          <Category
            value={`Lasts up to ${contraceptives[method1]?.usePatternHighBound} ${contraceptives[method1]?.usePatternUnits}`}
            valueClass="teal title1"
            title="Frequency of use"
            titleClass="lightGray subtitle1"
          />
          <Category
            value={`\$${contraceptives[method1]?.costMin} - \$${contraceptives[method1]?.costMax}`}
            valueClass="teal title1"
            title="Cost"
            titleClass="lightGray subtitle1"
          ></Category>
        </Col>
        <Col span="9" offset={2}>
          <StyledDropdown
            title={contraceptives[method2]?.name ?? 'Method 2'}
            menuItemInfos={contraceptives.map((c) => {
              return {
                title: c.name,
                action: setMethod2,
              };
            })}
          />
          <Category
            value={`${contraceptives[method2]?.effectiveRate}% Effective`}
            valueClass="teal title1"
            title="Efficacy"
            titleClass="lightGray subtitle1"
          />
          <Category
            value={`Lasts up to ${contraceptives[method2]?.usePatternHighBound} ${contraceptives[method2]?.usePatternUnits}`}
            valueClass="teal title1"
            title="Frequency of use"
            titleClass="lightGray subtitle1"
          />
          <Category
            value={`\$${contraceptives[method2]?.costMin} - \$${contraceptives[method2]?.costMax}`}
            valueClass="teal title1"
            title="Cost"
            titleClass="lightGray subtitle1"
          ></Category>
        </Col>
      </Row>

      <Collapse
        defaultActiveKey={['-1']}
        bordered={false}
        onChange={(e) => setValue(e)}
      >
        {headers.map((h, i) => (
          <PanelDrop
            showArrow={false}
            extra={
              <TextHeader>
                {value.includes(i.toString()) ? (
                  <MinusImage></MinusImage>
                ) : (
                  <PlusImage></PlusImage>
                )}
              </TextHeader>
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

Compare.getInitialProps = async (ctx) => {
  const res = await axios.get('http://localhost:3001/contraceptive');
  const contraceptiveList = res.data;
  return { contraceptives: contraceptiveList };
};

export default Compare;
