import {
  Description,
  DescriptionBold,
} from '../templates/contraceptives/tabs/StyledComponents';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import SvgWelcomeImage from '../public/welcome.svg';
import { API } from '../api-client';
import { useRouter } from 'next/router';

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Hi = styled.h1`
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  align-items: center;
  background-color: #ffbba8;
  display: flex;
  justify-content: center;
  padding: 4rem 0rem;
`;

const Name = styled.span`
  color: #7e1a6a;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
  padding: 0 2rem;
  margin-top: auto;
  margin-bottom: 1.5rem;
`;

const Skip = styled(DescriptionBold)`
  cursor: pointer;
  font-size: 0.75rem;
`;

const Survey = styled.button`
  background-color: #7e1a6a;
  border-color: transparent;
  border-radius: 0.25rem;
  border-width: 0;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
`;

const WelcomeDescription = styled(Description)`
  font-size: 0.75rem;
  margin-top: 0rem;
`;

const Welcome = (): ReactElement => {
  const router = useRouter();
  const [name, setName] = useState('');
  useEffect(() => {
    if (!name) {
      getName();
    }
  });
  const getName = async () => {
    try {
      const user = await API.user.getName();
      setName(user);
    } catch (e) {
      // If user is not signed in (expects not-logged-in error)
      // router.push('/signin');
    }
  };
  return (
    <Container>
      <ImageContainer>
        <SvgWelcomeImage />
      </ImageContainer>
      <BottomContainer>
        <Hi>
          Hi, <Name>{name}</Name>
        </Hi>
        <WelcomeDescription>
          Please tell us more about yourself so we can find the best
          contraception for your lifestyle.
        </WelcomeDescription>
      </BottomContainer>
      <Row>
        <Skip onClick={() => router.push('/')}>Skip for now</Skip>
        <Survey onClick={() => router.push('/survey')}>I'd love to</Survey>
      </Row>
    </Container>
  );
};

export default Welcome;
