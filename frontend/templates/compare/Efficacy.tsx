import { ReactElement } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import SvgRemoveImplant from '../../public/remove-implant.svg';
import SvgRollCondom from '../../public/roll-condom.svg';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';
import { Row, Col } from 'antd';

export interface EfficacyProps {
  effectiveRate: number;
  effectiveRateRight: number;
  whenItStartsToWork: string;
  whenItStartsToWorkRight: string;
  howLongUntilFertility: string;
  howLongUntilFertilityRight: string;
}

const Efficacy = ({
  effectiveRate,
  effectiveRateRight,
  whenItStartsToWork,
  whenItStartsToWorkRight,
  howLongUntilFertility,
  howLongUntilFertilityRight,
}: EfficacyProps): ReactElement => {
  return (
    <div>
      <Title title="How well does it prevent preganancy?" />
      <Row className="noSpace bold teal centerText title1">
        <Col span={9} offset={2}>
          {effectiveRate}%
        </Col>
        <Col span={9} offset={2}>
          {effectiveRate}%
        </Col>
      </Row>

      <Row className="noSpace centerText">
        <Col span={9} offset={2}>
          <Text>Effective</Text>
        </Col>
        <Col span={9} offset={2}>
          <Text>Effective</Text>
        </Col>
      </Row>
    </div>
  );
};
export default Efficacy;
/*
{Title('When does it start to work?')}
      {ColText(
        <Text>
          <ColorText>Every time</ColorText> if the condom is placed and used
          correctly
        </Text>,
        <ListLetters>
          <ListElement>
            <ColorText>Immediately</ColorText> if the implant is fitted during
            the <ColorText>first 5 days of your menstrual cycle</ColorText>
          </ListElement>
          <ListElement>
            <ColorText>After a week of additional contraception</ColorText> if
            the implant is fitted on any other day of your menstrual cycle
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
      */
