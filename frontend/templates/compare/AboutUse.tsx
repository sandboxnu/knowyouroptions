import { ReactElement } from 'react';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';
import StyledCompareSvg from '../../components/compare/StyledCompareSvg';

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
        span={6}
        LeftElm={
          <div>
            <StyledCompareSvg
              className="gray subtitle1"
              src={`compare/${contraceptiveNameLeft?.toLowerCase()}.svg`}
            />
            <figcaption className="gray subtitle1">{howItWorks}</figcaption>
          </div>
        }
        RightElm={
          <div>
            <StyledCompareSvg
              className="gray subtitle1"
              src={`compare/${contraceptiveNameRight?.toLowerCase()}.svg`}
            />
            <figcaption className="gray subtitle1">
              {howItWorksRight}
            </figcaption>
          </div>
        }
      />

      <Title title="How often to use?" />
      <TwoColumns
        span={6}
        LeftElm={
          <div>
            <Text className="centerText bold teal">
              Lasts up to {usePatternHighBound} {usePatternUnits}
            </Text>
            <Text className="gray">
              Placed on male tip of the penis, roll it down over the length of
              the erect penis.
            </Text>
          </div>
        }
        RightElm={
          <div>
            <Text className="centerText bold teal">
              Lasts up to {usePatternHighBoundRight} {usePatternUnitsRight}
            </Text>
            <Text className="gray">
              It is inserted under the skin of your upper arm.
            </Text>
          </div>
        }
      />
    </div>
  );
};
export default AboutUse;
