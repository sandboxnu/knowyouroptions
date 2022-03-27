import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';
import Image from '../../components/compare/Image';

// Styling
export interface AboutUseProps {
  howItWorks: string;
  howItWorksRight: string;
  usePatternHighBound: number;
  usePatternHighBoundRight: number;
  usePatternUnits: string;
  usePatternUnitsRight: string;
  contraceptiveNameLeft: string;
  contraceptiveNameRight: string;
}

const AboutUse = ({
  howItWorks,
  howItWorksRight,
  usePatternHighBound,
  usePatternHighBoundRight,
  usePatternUnits,
  usePatternUnitsRight,
  contraceptiveNameLeft,
  contraceptiveNameRight,
}: AboutUseProps): ReactElement => {
  return (
    <div>
      <Title title="How To Use" />
      <TwoColumns
        LeftElm={
          <Image src={`compare/${contraceptiveNameLeft?.toLowerCase()}.svg`} />
        }
        RightElm={
          <Image src={`compare/${contraceptiveNameRight?.toLowerCase()}.svg`} />
        }
      />
      <TwoColumns
        LeftElm={<Text>{howItWorks}</Text>}
        RightElm={<Text>{howItWorksRight}</Text>}
      />
      <Title title="How often to use?" />

      <TwoColumns
        LeftElm={
          <Text className="centerText bold teal">
            Lasts up to {usePatternHighBound} {usePatternUnits}
          </Text>
        }
        RightElm={
          <Text className="centerText bold teal">
            Lasts up to {usePatternHighBoundRight} {usePatternUnitsRight}
          </Text>
        }
      />

      <TwoColumns
        LeftElm={
          <Text>
            Placed on male tip of the penis, roll it down over the length of the
            erect penis.
          </Text>
        }
        RightElm={<Text>It is inserted under the skin of your upper arm.</Text>}
      />
    </div>
  );
};
export default AboutUse;
