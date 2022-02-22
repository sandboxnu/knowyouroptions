import { Card as AntdCard } from 'antd';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SvgRightArrow from '../public/right-arrow.svg';
import { size, maxDevice } from '../templates/mediaSizes';

const StyledCard = styled(AntdCard)`
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 1rem;

  margin-right: 3%;

  @media ${maxDevice.laptop} {
    flex-grow: 1;
    width: 45%;
    max-width: 100%;
    margin: 0.25rem;
  }

  @media (min-width: ${size.laptop + 1}px) {
    &:nth-child(3) {
      max-width: 35%;
      margin-right: 0;
    }

    max-width: 28%;
    padding: 2rem;
  }
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
  align-self: flex-end;
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
  };
  return (
    <StyledCard
      bodyStyle={{
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
