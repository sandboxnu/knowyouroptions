import { ReactElement } from 'react';
import styled from 'styled-components';

// Style

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

// Components

const StopIcons = ({
  icon,
  label,
}: {
  icon: ReactElement,
  label: string,
}) => {
  return (
    <>
      <Column>
        {icon}
        <p>{label}</p>
      </Column>
    </>
  );
};

export declare interface EfficacyProps {
  backToFertilityDesc: string,
  howToStopDesc: string,
  pregnancyPreventionRate: number,
  stopInfos: [ReactElement, string][],
  whenItStartsToWorkInfos: Array<string>,
};

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
      <p><span>{pregnancyPreventionRate}%</span> effective</p>
      <p>Less than {100 - pregnancyPreventionRate} in 100 women will get pregnant during the first year on this method.</p>
      <h3>When it starts to work?</h3>
      <ol type="A">
        {whenItStartsToWorkInfos.map((desc) => <li>{desc}</li>)}
      </ol>

      <h3>How can I stop it?</h3>
      <p>{howToStopDesc}</p>
      <Row>
        {stopInfos.map(([icon, label]) => {
          return (
            <StopIcons label={label} icon={icon} />
          );
        })}
      </Row>
      <h3>Getting back to fertility</h3>
      <p>{backToFertilityDesc}</p>
    </>
  );
};

export default Efficacy;
