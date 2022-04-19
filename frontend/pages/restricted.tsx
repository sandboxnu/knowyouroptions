import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { colors, device, maxDevice } from '../templates/mediaSizes';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  padding-top: 5rem;
  background-color: ${colors.homepageBackground};
  height: 100%;
  width: 100%;

  @media ${device.laptop} {
    padding-top: 2rem;
  }
`;

const Info = styled.span`
  color: purple;
  cursor: pointer;
  font-family: roboto;
  margin: 0;
`;

const Restricted = (): ReactElement => {
  const router = useRouter();
  const onClick = () => router.push('/signin');
  return (
    <>
      <Layout>
        <Container>
          <span>Please</span>
          <Info onClick={onClick}>&nbsp;login or sign up&nbsp;</Info>
          <span>to view this page</span>
        </Container>
      </Layout>
    </>
  );
};

export default Restricted;
