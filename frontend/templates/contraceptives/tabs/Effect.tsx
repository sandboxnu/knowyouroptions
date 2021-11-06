import { ReactElement } from 'react';
import styled from 'styled-components';
import { Column, Description, Row } from './StyledComponents';

// Styles

const Container = styled(Column)`
  align-items: center;
  text-align: center;
  width: 30%;
`;

const IconContainer = styled.div``;

const Label = styled(Description)`
  margin-left: 1rem;
`;

const RowWrapped = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
`;

const SideEffectsIconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 6vh;
//  height: 5px;
`;

const SideEffectsLabel = styled(Description)`
  margin: 0;
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
              <IconContainer>
                {icon}
              </IconContainer>
              <Label>{label}</Label>
            </Row>
          );
        })}
      </Column>
      <h3>Side effects</h3>
      <RowWrapped>
        {sideEffectsInfos.map((infos) => {
          const [icon, label] = infos;
          return (
            <Container key={label}>
              <SideEffectsIconContainer>
                {icon}
              </SideEffectsIconContainer>
              <SideEffectsLabel>{label}</SideEffectsLabel>
            </Container>
          );
        })}
      </RowWrapped>
    </>
  );
};

export default Effect;