import { Card as AntdCard } from 'antd';
import { ReactElement, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledCard = styled(AntdCard)`
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 1rem;
  margin: 0.25rem;
`;

const Title = styled.h2`
  margin-top: 0.25rem;
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
  link = '',
}: {
  title: string;
  description: string;
  link?: string;
}): ReactElement => {
  const router = useRouter();
  return (
    <StyledCard
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onClick={() => router.push(link)}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
      <RightArrow />
    </StyledCard>
  );
};

export default Card;
