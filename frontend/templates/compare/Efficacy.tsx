import { ReactElement } from 'react';
import styled from 'styled-components';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';
import Category from '../../components/Category';
import StyledCompareSvg from '../../components/compare/StyledCompareSvg';
export interface EfficacyProps {
  effectiveRate: number;
  effectiveRateRight: number;
  whenItStartsToWork: string[];
  whenItStartsToWorkRight: string[];
  howToStopMethod: string;
  howToStopMethodRight: string;
  howLongUntilFertility: string;
  howLongUntilFertilityRight: string;
  contraceptiveNameLeft: string;
  contraceptiveNameRight: string;
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

const Efficacy = ({
  effectiveRate,
  effectiveRateRight,
  whenItStartsToWork,
  whenItStartsToWorkRight,
  howToStopMethod,
  howToStopMethodRight,
  howLongUntilFertility,
  howLongUntilFertilityRight,
  contraceptiveNameLeft,
  contraceptiveNameRight,
}: EfficacyProps): ReactElement => {
  return (
    <div>
      <Title title="How well does it prevent preganancy?" />
      <TwoColumns
        LeftElm={
          <Category
            value={`${effectiveRate}%`}
            valueClass="bold teal centerText title1"
            title="Effective"
            titleClass="gray centerText subtitle1"
          />
        }
        RightElm={
          <Category
            value={`${effectiveRateRight}%`}
            valueClass="bold teal centerText title1"
            title="Effective"
            titleClass="gray centerText subtitle1"
          />
        }
      />

      <Title title="When it starts to work?" />
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
        LeftElm={
          <div>
            <StyledCompareSvg
              src={`compare/howtostop/${contraceptiveNameLeft}.svg`}
            />
            <figcaption className="gray subtitle1">
              {howToStopMethod}
            </figcaption>
          </div>
        }
        RightElm={
          <div>
            <StyledCompareSvg
              src={`compare/howtostop/${contraceptiveNameRight}.svg`}
            />
            <figcaption className="gray subtitle1">
              {howToStopMethodRight}
            </figcaption>
          </div>
        }
      />
      <Title title="Getting back to fertility" />
      <TwoColumns
        LeftElm={<Text className="gray">{howLongUntilFertility}</Text>}
        RightElm={<Text className="gray">{howLongUntilFertilityRight}</Text>}
      />
    </div>
  );
};

export default Efficacy;
