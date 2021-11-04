import { ReactElement } from 'react';
import styled from 'styled-components';
import { Column, Row } from './StyledComponents';

// Styles

const RowWrapped = styled(Row)`
  flex-wrap: wrap;
`;

// Components

export declare interface EffectProps {
  benefitsInfos: [ReactElement, string][],
  sideEffectsInfos: [ReactElement, string][],
};

const Effect = ({
  benefitsInfos,
  sideEffectsInfos,
 }: EffectProps) => {
  return (
    <>
      <h3>Non-contraceptive benefits</h3>
      <Column>
        {benefitsInfos.map((infos) => {
          const [icon, label] = infos;
          return (
            <Row key={label}>
              {icon}
              <p>{label}</p>
            </Row>
          );
        })}
      </Column>
      <h3>Side effects</h3>
      <RowWrapped>
        {sideEffectsInfos.map((infos) => {
          const [icon, label] = infos;
          return (
            <Column key={label}>
              <p>{icon}</p>
              <p>{label}</p>
            </Column>
          );
        })}
      </RowWrapped>
    </>
  );
};

export default Effect;