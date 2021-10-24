import { Card as AntdCard } from 'antd';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SvgRightArrow from '../public/right-arrow.svg';

const StyledCard = styled(AntdCard)`
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 1rem;
  margin: 0.25rem;
`;

const Title = styled.h2`
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  color: gray;
`;

const RightArrow = styled(SvgRightArrow)`
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
  const StyledCardProps = {
    onClick: () => router.push(link),
  }
  return (
    <StyledCard
      bodyStyle= {{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}

      {...StyledCardProps}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
      <RightArrow />
    </StyledCard>
  );
};

export default Card;
