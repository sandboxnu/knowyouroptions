import { Card as AntdCard } from 'antd';
import { ReactElement, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledCard = styled(AntdCard)`
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  color: gray;
`;

const RightArrow = styled(ArrowRightOutlined)`
  align-self: end;
  margin-top: auto;
`;

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): ReactElement => {
  return (
    <StyledCard
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
      <RightArrow />
    </StyledCard>
  );
};

export default Card;
