import { ReactElement } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import SvgRemoveImplant from '../../public/remove-implant.svg';
import SvgRollCondom from '../../public/roll-condom.svg';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';

// Styling

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
  return (
    <div>
      {Title('How To Use')}
      {TwoColumns(
        <RollCondomImage></RollCondomImage>,
        <RemoveImplantImage></RemoveImplantImage>,
      )}
      {TwoColumns(<Text>{howItWorks}</Text>, <Text>{howItWorksRight}</Text>)}
      {Title('How often to use?')}
      {TwoColumns(
        <Text className="centerText bold teal">
          Lasts up to {usePatternHighBound} {usePatternUnits}
        </Text>,
        <Text className="centerText bold teal">
          Lasts up to {usePatternHighBoundRight} {usePatternUnitsRight}
        </Text>,
      )}
      {TwoColumns(
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
