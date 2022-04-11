import { ReactElement, useState } from 'react';
import * as React from 'react';
import StyledDropdown from '../components/Dropdown';
import AboutUse, { AboutUseProps } from '../templates/compare/AboutUse';
import Efficacy, { EfficacyProps } from '../templates/compare/Efficacy';
import Mechanism, { MechanismProps } from '../templates/compare/Mechanism';
import PracticalQuestions, {
  PracticalQuestionsProps,
} from '../templates/compare/PracticalQuestions';
import styled from 'styled-components';
import { Collapse } from 'antd';
import SvgPlus from '../public/plus.svg';
import SvgMinus from '../public/minus.svg';
import { colors, device } from '../templates/mediaSizes';
import Category from '../components/Category';
import AdditionalInformation, {
  AdditionalInfoProps,
} from '../templates/compare/AdditonalInformation';
import Effect, { EffectProps } from '../templates/compare/Effect';
import TwoColumns from '../components/compare/TwoColumns';
import { API, Contraceptive } from '../api-client';
import Menubar from '../components/Menubar';
import Layout from '../components/Layout';

const { Panel } = Collapse;
const MainContainer = styled.div`
  background-color: white;
  margin-top: 2rem;
`;
const Container = styled.div`
  width: 80%;
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: min(3vw, 1.5rem);
`;
export const Text = styled.p`
  margin: 0 auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: min(3vw, 1rem);
`;

const CircleNumber = styled.div`
  height: min(6vw, 3rem);
  width: min(6vw, 3rem);
  display: inline-block;
  text-align: center;
  border-radius: 25px;
  background-color: #16999f;
  line-height: min(6vw, 3rem); //same value as heights
  float: left;
  margin-left: 3%;
`;

const TextHeader = styled.p`
  font-size: min(3vw, 1.5rem);
  color: ${colors.comparePageText};
  display: inline-block;
  margin: 0;
  padding-top: 8px;
  padding-left: 15px;
  font-weight: 500;
`;

const PanelDrop = styled(Panel)`
  background-color: white;
  padding: 2vh;
`;

const NumberText = styled.p`
  color: white;
  font-size: min(3vw, 1.5rem);
`;

const PlusImage = styled(SvgPlus)`
  fill: ${colors.comparePageText};
`;

const MinusImage = styled(SvgMinus)`
  fill: ${colors.comparePageText};
`;

const StyledCollapse = styled(Collapse)`
  margin-top: 6vh;
`;

const Header = styled.div`
  background-color: #febba8;
  display: flex;
  flex-direction: row;

  height: 12rem;

  @media ${device.laptop} {
    height: 10rem;
    position: relative;
  }
`;

const Title = styled.h1`
  align-self: flex-end;
  margin-left: 10vw;
`;

type CompareProps = {
  contraceptives: Contraceptive[];
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
      />
    </div>
  );

  return (
    <Layout>
      <>
        <Header>
          <Title>Compare Methods</Title>
        </Header>
        <MainContainer>
          <TwoColumns
            LeftElm={
              <StyledDropdown
                title={contraceptives[method1]?.name ?? 'Method 1'}
                menuItemInfos={contraceptives.map((c) => {
                  return {
                    title: c.name,
                    action: setMethod1,
                  };
                })}
                filter={[method2, method1]}
              />
            }
            RightElm={
              <StyledDropdown
                title={contraceptives[method2]?.name ?? 'Method 2'}
                menuItemInfos={contraceptives.map((c) => {
                  return {
                    title: c.name,
                    action: setMethod2,
                  };
                })}
                filter={[method1, method2]}
              />
            }
          />

          {shouldShowSections ? (
            <TwoColumns
              LeftElm={summaryOfMethod(method1)}
              RightElm={summaryOfMethod(method2)}
            />
          ) : (
            <></>
          )}

          {shouldShowSections ? (
            <StyledCollapse
              defaultActiveKey={['-1']}
              bordered={true}
              onChange={(e) => setValue(e)}
            >
              {headers.map((h, i) => (
                <PanelDrop
                  showArrow={false}
                  extra={
                    <TextHeader>
                      {value.includes(i.toString()) ? (
                        <MinusImage />
                      ) : (
                        <PlusImage />
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
            </StyledCollapse>
          ) : (
            <></>
          )}
        </MainContainer>
      </>
    </Layout>
  );
};

Compare.getInitialProps = async () => {
  const contraceptiveList = await API.contraceptive.getAll();
  return { contraceptives: contraceptiveList };
};

export default Compare;
