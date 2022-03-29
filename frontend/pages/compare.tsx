import { ReactElement, useState } from 'react';
import * as React from 'react';
import { Contraceptive } from '../../backend/src/entities/contraceptive.entity';
import StyledDropdown from '../components/Dropdown';
import AboutUse, { AboutUseProps } from '../templates/compare/AboutUse';
import Efficacy, { EfficacyProps } from '../templates/compare/Efficacy';
import Mechanism, { MechanismProps } from '../templates/compare/Mechanism';
import PracticalQuestions, {
  PracticalQuestionsProps,
} from '../templates/compare/PracticalQuestions';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Collapse } from 'antd';
import SvgPlus from '../public/plus.svg';
import SvgMinus from '../public/minus.svg';
import { colors } from '../templates/mediaSizes';
import axios from 'axios';
import Category from '../components/Category';
import AdditionalInformation, {
  AdditionalInfoProps,
} from '../templates/compare/AdditonalInformation';
import Effect, { EffectProps } from '../templates/compare/Effect';
import TwoColumns from '../components/compare/TwoColumns';
const { Panel } = Collapse;
const BodyContainer = styled.body`
  margin-top: 100px;
`;
const Container = styled.div`
  width: 80%;
  margin: 0;
  padding: 0;
  display: inline-block;
`;
export const Text = styled.p`
  margin: 0 auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
  font-size: 20px;
`;

const PlusImage = styled(SvgPlus)`
  fill: ${colors.comparePageText};
`;

const MinusImage = styled(SvgMinus)`
  fill: ${colors.comparePageText};
`;

type CompareProps = {
  contraceptives: [Contraceptive];
};

const Compare = (compareProps: CompareProps): ReactElement => {
  const { contraceptives } = compareProps;
  const [value, setValue] = useState<string | string[]>(['']);

  // Indices of selected methods
  const [method1, setMethod1] = useState<number>(-1);
  const [method2, setMethod2] = useState<number>(-1);

  const AboutUseContent: AboutUseProps = {
    howItWorks: contraceptives[method1]?.howItWorks,
    howItWorksRight: contraceptives[method2]?.howItWorks,
    usePatternHighBound: contraceptives[method1]?.usePatternHighBound,
    usePatternHighBoundRight: contraceptives[method2]?.usePatternHighBound,
    usePatternUnits: contraceptives[method1]?.usePatternUnits,
    usePatternUnitsRight: contraceptives[method2]?.usePatternUnits,
    contraceptiveNameLeft: contraceptives[method1]?.name,
    contraceptiveNameRight: contraceptives[method2]?.name,
  };

  const EfficacyContent: EfficacyProps = {
    effectiveRate: contraceptives[method1]?.effectiveRate,
    effectiveRateRight: contraceptives[method2]?.effectiveRate,
    whenItStartsToWork: contraceptives[method1]?.whenItStartsToWork,
    whenItStartsToWorkRight: contraceptives[method2]?.whenItStartsToWork,
    howToStopMethod: contraceptives[method1]?.howToStop,
    howToStopMethodRight: contraceptives[method2]?.howToStop,
    howLongUntilFertility: contraceptives[method1]?.howLongUntilFertility,
    howLongUntilFertilityRight: contraceptives[method2]?.howLongUntilFertility,
    contraceptiveNameLeft: contraceptives[method1]?.name,
    contraceptiveNameRight: contraceptives[method2]?.name,
  };

  const EffectContent: EffectProps = {
    benefitsLeft: contraceptives[method1]?.benefits,
    benefitsRight: contraceptives[method2]?.benefits,
    sideEffectsLeft: contraceptives[method1]?.sideEffects,
    sideEffectsRight: contraceptives[method2]?.sideEffects,
  };

  const MechanismContent: MechanismProps = {
    contraceptive: contraceptives[method1]?.name,
    contraceptiveRight: contraceptives[method2]?.name,
    howItWorks: contraceptives[method1]?.howItWorks,
    howItWorksRight: contraceptives[method2]?.howItWorks,
    healthRisks: contraceptives[method1]?.healthRisks,
    healthRisksRight: contraceptives[method2]?.healthRisks,
    warning: contraceptives[method1]?.warning,
    warningRight: contraceptives[method2]?.warning,
    whoCantUse: contraceptives[method1]?.whoCantUse,
    whoCantUseRight: contraceptives[method2]?.whoCantUse,
  };
  const PracticalQuestionsContent: PracticalQuestionsProps = {
    whereToAccessLeft: contraceptives[method1]?.whereToAccess,
    whereToAccessRight: contraceptives[method2]?.whereToAccess,
    whoWillAdministerLeft: contraceptives[method1]?.whoAdministers,
    whoWillAdministerRight: contraceptives[method2]?.whoAdministers,
    costLowLeft: contraceptives[method1]?.costMin,
    costHighLeft: contraceptives[method1]?.costMax,
    costLowRight: contraceptives[method2]?.costMin,
    costHighRight: contraceptives[method2]?.costMax,
  };

  const AdditionalInfoContent: AdditionalInfoProps = {
    thingsToKnowLeft: contraceptives[method1]?.thingsToKnow,
    thingsToKnowRight: contraceptives[method2]?.thingsToKnow,
  };

  const headers = [
    {
      header: 'About use',
      reactContent: <AboutUse {...AboutUseContent} />,
    },
    {
      header: 'Efficacy',
      reactContent: <Efficacy {...EfficacyContent} />,
    },
    {
      header: 'Effect',
      reactContent: <Effect {...EffectContent} />,
    },
    {
      header: 'Mechanism',
      reactContent: <Mechanism {...MechanismContent} />,
    },
    {
      header: 'Practical questions',
      reactContent: <PracticalQuestions {...PracticalQuestionsContent} />,
    },
    {
      header: 'Additional information',
      reactContent: <AdditionalInformation {...AdditionalInfoContent} />,
    },
  ];

  const shouldShowSections = method1 >= 0 && method2 >= 0;
  const summaryOfMethod = (methodIndex: number) => (
    <div>
      <Category
        value={`${contraceptives[methodIndex]?.effectiveRate}% Effective`}
        valueClass="teal title1"
        title="Efficacy"
        titleClass="lightGray subtitle1"
      />
      <Category
        value={`Lasts up to ${contraceptives[methodIndex]?.usePatternHighBound} ${contraceptives[method2]?.usePatternUnits}`}
        valueClass="teal title1"
        title="Frequency of use"
        titleClass="lightGray subtitle1"
      />
      <Category
        value={`\$${contraceptives[methodIndex]?.costMin} - \$${contraceptives[methodIndex]?.costMax}`}
        valueClass="teal title1"
        title="Cost"
        titleClass="lightGray subtitle1"
      ></Category>
    </div>
  );

  return (
    <BodyContainer>
      <TwoColumns
        LeftElm={
          <StyledDropdown
            title={contraceptives[method1]?.name ?? 'Method 1'}
            menuItemInfos={contraceptives
              .filter((_c, i) => i !== method2)
              .map((c) => {
                return {
                  title: c.name,
                  action: setMethod1,
                };
              })}
          />
        }
        RightElm={
          <StyledDropdown
            title={contraceptives[method2]?.name ?? 'Method 2'}
            menuItemInfos={contraceptives
              .filter((_c, i) => i !== method1)
              .map((c) => {
                return {
                  title: c.name,
                  action: setMethod2,
                };
              })}
          />
        }
      />

      {shouldShowSections ? (
        <TwoColumns
          LeftElm={summaryOfMethod(method1)}
          RightElm={summaryOfMethod(method2)}
        />
      ) : (
        <div />
      )}

      {shouldShowSections ? (
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
      ) : (
        <div />
      )}
    </BodyContainer>
  );
};

Compare.getInitialProps = async () => {
  const res = await axios.get('http://localhost:3001/contraceptive');
  const contraceptiveList = res.data;
  return { contraceptives: contraceptiveList };
};

export default Compare;
