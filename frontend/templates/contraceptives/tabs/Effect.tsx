import { ReactElement } from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

// Styles

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
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
      <Row>
        {sideEffectsInfos.map((infos) => {
          const [icon, label] = infos;
          return (
            <Column key={label}>
              <p>{icon}</p>
              <p>{label}</p>
            </Column>
          );
        })}
      </Row>
    </>
  );
};

export default Effect;