import { ReactElement } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import SvgRemoveImplant from '../../public/remove-implant.svg';
import SvgRollCondom from '../../public/roll-condom.svg';

// Styling

const Header = styled.h1`
  padding-top: 1vh;
  padding-bottom: 3vh;
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
  max-width: 400px;
  margin: 0 auto;
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
    return (
      <Col span={24}>{<Header className="centerText">{title}</Header>}</Col>
    );
  };
  const ColText = (
    leftText: ReactElement,
    rightText: ReactElement,
  ): ReactElement => {
    return (
      <Row>
        <Col span={9} offset={2}>
          {leftText}
        </Col>
        <Col span={9} offset={2}>
          {rightText}
        </Col>
      </Row>
    );
  };
  return (
    <div>
      {Title('How To Use')}
      <Row>
        <Col span={9} offset={2}>
          <RollCondomImage></RollCondomImage>
        </Col>
        <Col span={9} offset={2}>
          <RemoveImplantImage></RemoveImplantImage>
        </Col>
      </Row>
      {ColText(<Text>{howItWorks}</Text>, <Text>{howItWorksRight}</Text>)}
      {Title('How often to use?')}
      {ColText(
        <Text className="centerText bold teal">
          Lasts up to {usePatternHighBound} {usePatternUnits}
        </Text>,
        <Text className="centerText bold teal">
          Lasts up to {usePatternHighBoundRight} {usePatternUnitsRight}
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
