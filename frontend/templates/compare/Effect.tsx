import { ReactElement } from 'react';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import StyledCompareSvg from '../../components/compare/StyledCompareSvg';
import { Benefit, SideEffect } from '../../api-client';

// Styling
export interface EffectProps {
  benefitsLeft: Benefit[];
  benefitsRight: Benefit[];
  sideEffectsLeft: SideEffect[];
  sideEffectsRight: SideEffect[];
}

const Effect = ({
  benefitsLeft = [],
  benefitsRight = [],
  sideEffectsLeft = [],
  sideEffectsRight = [],
}: EffectProps): ReactElement => {
  // TODO: Map to file names in public/compare/benefits
  const benefitMap = (benefit: Benefit) => (
    <div>
      <StyledCompareSvg src={`compare/condom.svg`} />
      <figcaption className="gray subtitle1">{'caption'}</figcaption>
    </div>
  );

  // TODO: Map to file names in public/compare/sideeffects
  const sideEffectMap = (sideEffect: SideEffect) => (
    <div>
      <StyledCompareSvg src={`compare/condom.svg`} />
      <figcaption className="gray subtitle1">{'caption'}</figcaption>
    </div>
  );

  return (
    <div>
      <Title title="Non-contraceptive benefits" />
      <TwoColumns
        span={8}
        LeftElm={<div>{benefitsLeft.map(benefitMap)}</div>}
        RightElm={<div>{benefitsRight.map(benefitMap)}</div>}
      />

      <Title title="Side effects?" />
      <TwoColumns
        span={8}
        LeftElm={<div>{sideEffectsLeft.map(sideEffectMap)}</div>}
        RightElm={<div>{sideEffectsRight.map(sideEffectMap)}</div>}
      />
    </div>
  );
};
export default Effect;
