import { ReactElement } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import Image from 'next/image';
import homepagePic from '../public/home-image.png';
import Layout from '../components/Layout';

const HomeContainer = styled.div`
  background-color: #ef8b6f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
`;

const HomeTitle = styled.h1`
  font-family: din-2014;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 1rem;
  width: 100%;
`;

const ImageContainer = styled(Row)`
  margin: 1rem 0rem 1rem 0rem;
`;

const Home = (): ReactElement => {
  return (
    <Layout>
      <HomeContainer>
        <HomeTitle>Home</HomeTitle>
        <ImageContainer>
          <Image src={homepagePic} placeholder="blur" />
        </ImageContainer>
        <Row>
          <Card
            title="Methods"
            description="Explore the available contraceptive methods"
            link="/methods"
          />
          <Card
            title="Stories"
            description="Share your stories and experience with peers"
            link="/stories"
          />
          <Card
            title="Quiz"
            description="Take a short questionnaire to find the methods that fit your needs."
            link="/quiz"
          />
        </Row>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
