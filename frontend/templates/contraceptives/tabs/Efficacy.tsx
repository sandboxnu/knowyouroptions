import { ReactElement } from 'react';
import {
  CategoryValue,
  Column,
  Description,
  HighlightDescription,
  Row,
} from './StyledComponents';
import styled from 'styled-components';

// Styles

const AlphaList = styled.ol`
  color: #7c7c7c;
`;

const CategoryValueStyled = styled(CategoryValue)`
  font-size: 1rem;
`;

const HighlightedDescription = styled(HighlightDescription)`
  color: black;
  font-weight: bold;
`;

// Components

const StopIcons = ({ icon, label }: { icon: ReactElement; label: string }) => {
  return (
    <>
      <Column>
        {icon}
        <Description>{label}</Description>
      </Column>
    </>
  );
};

export interface EfficacyProps {
  backToFertilityDesc: string;
  howToStopDesc: string;
  pregnancyPreventionRate: number;
  stopInfos: [ReactElement, string][];
  whenItStartsToWorkInfos: Array<string[]>;
}

const Efficacy = ({
  backToFertilityDesc,
  howToStopDesc,
  pregnancyPreventionRate,
  stopInfos,
  whenItStartsToWorkInfos,
}: EfficacyProps): ReactElement => {
  return (
    <>
      <h3>How well does it prevent pregnancy?</h3>
      <CategoryValueStyled
        unit={'effective'}
        value={pregnancyPreventionRate + '%'}
      />
      <Description>
        Less than {100 - pregnancyPreventionRate} in 100 women will get pregnant
        during the first year on this method.
      </Description>
      <h3>When it starts to work?</h3>
      <AlphaList type="A">
        {whenItStartsToWorkInfos.map((desc, index) => (
          <li key={index}>
            <HighlightedDescription description={desc} />
          </li>
        ))}
      </AlphaList>

      <h3>How can I stop it?</h3>
      <Description>{howToStopDesc}</Description>
      <Row>
        {stopInfos.map(([icon, label]) => {
          return <StopIcons key={label} label={label} icon={icon} />;
        })}
      </Row>
      <h3>Getting back to fertility</h3>
      <Description>{backToFertilityDesc}</Description>
    </>
  );
};

export default Efficacy;
