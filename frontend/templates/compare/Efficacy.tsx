import { ReactElement } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';
import { Row, Col } from 'antd';
import SvgRemoveImplant from '../../public/remove-implant.svg';
import SvgPullCondom from '../../public/pull-condom.svg';
export interface EfficacyProps {
  effectiveRate: number;
  effectiveRateRight: number;
  whenItStartsToWork: string[];
  whenItStartsToWorkRight: string[];
  howToStopMethod: string;
  howToStopMethodRight: string;
  howLongUntilFertility: string;
  howLongUntilFertilityRight: string;
}
const ListLetters = styled.ol`
  list-style-type: upper-alpha;
`;
const ListElement = styled.li`
  padding-left: 1%;
  max-width: 350px;
  padding-bottom: 1vh;
  margin-left: auto;
  margin-right: auto;
  color: #808080;
`;

const RemoveImplantImage = styled(SvgRemoveImplant)`
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
const Efficacy = ({
  effectiveRate,
  effectiveRateRight,
  whenItStartsToWork,
  whenItStartsToWorkRight,
  howToStopMethod,
  howToStopMethodRight,
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
          {effectiveRateRight}%
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
      <Title title="When does it starts to work?" />
      <TwoColumns
        span={8}
        LeftElm={
          whenItStartsToWork.length != 1 ? (
            <ListLetters className="subtitle1">
              {whenItStartsToWork.map((elm) => (
                <ListElement>{elm}</ListElement>
              ))}{' '}
            </ListLetters>
          ) : (
            <Text>{whenItStartsToWork[0]}</Text>
          )
        }
        RightElm={
          whenItStartsToWorkRight.length != 1 ? (
            <ListLetters className="subtitle1">
              {whenItStartsToWorkRight.map((elm) => (
                <ListElement>{elm}</ListElement>
              ))}{' '}
            </ListLetters>
          ) : (
            <Text>{whenItStartsToWorkRight[0]}</Text>
          )
        }
      />
      <Title title="How can I stop it?" />
      <TwoColumns
        LeftElm={<PullCondomImage />}
        RightElm={<RemoveImplantImage />}
      />
      <Row className="paddingBelow">
        <Col span={9} offset={2}>
          <Text className="gray">{howToStopMethod}</Text>
        </Col>
        <Col span={9} offset={2}>
          <Text className="gray">{howToStopMethodRight}</Text>
        </Col>
      </Row>
      <Title title="Getting back to fertility" />
      <TwoColumns
        LeftElm={<Text className="gray">{howLongUntilFertility}</Text>}
        RightElm={<Text className="gray">{howLongUntilFertilityRight}</Text>}
      />
    </div>
  );
};

export default Efficacy;
