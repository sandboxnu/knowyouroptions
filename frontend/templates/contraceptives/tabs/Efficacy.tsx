import { ReactElement } from 'react';
import {
  CategoryValue,
  Column,
  Description,
  HighlightDescription,
  Row,
} from './StyledComponents';
import styled from 'styled-components';
import { size, device, maxDevice } from '../../mediaSizes';

// Styles

const AlphaList = styled.ol`
  color: #7c7c7c;
  padding-left: 1.25rem;

  @media ${device.laptop} {
    width: 30vw;
  }
`;

const CategoryValueStyled = styled(CategoryValue)`
  font-size: 1rem;
`;

const HighlightedDescription = styled(HighlightDescription)`
  color: black;
  font-weight: bold;
`;

const IconContainer = styled(Row)`
  column-gap: 1rem;
`;

const StopIconDescription = styled(Description)`
  margin: 0.5rem 0 0 0;
`;

const StopIconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 5vh;
`;

// Components

const StopIcons = ({ icon, label }: { icon: ReactElement; label: string }) => {
  return (
    <>
      <Column>
        <StopIconWrapper>{icon}</StopIconWrapper>
        <StopIconDescription>{label}</StopIconDescription>
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
        {whenItStartsToWorkInfos.map((desc, index) => {
          let StyledLi = styled.li``;
          if (index === 0) {
            StyledLi = styled.li`
              margin-bottom: 1rem;
            `;
          }
          return (
            <StyledLi key={index}>
              <HighlightedDescription description={desc} />
            </StyledLi>
          );
        })}
      </AlphaList>

      <h3>How can I stop it?</h3>
      <Description>{howToStopDesc}</Description>
      <IconContainer>
        {stopInfos.map(([icon, label]) => {
          return <StopIcons key={label} label={label} icon={icon} />;
        })}
      </IconContainer>
      <h3>Getting back to fertility</h3>
      <Description>{backToFertilityDesc}</Description>
    </>
  );
};

export default Efficacy;
