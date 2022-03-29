import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import StyledImage from '../../components/compare/StyledImage';
import { Benefit } from '../../../backend/src/entities/benefits.entity';
import { SideEffect } from '../../../backend/src/entities/side-effects.entity';

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
      <StyledImage src={`compare/condom.svg`}></StyledImage>
      <figcaption className="gray subtitle1">{'caption'}</figcaption>
    </div>
  );

  // TODO: Map to file names in public/compare/sideeffects
  const sideEffectMap = (sideEffect: SideEffect) => (
    <div>
      <StyledImage src={`compare/condom.svg`}></StyledImage>
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
