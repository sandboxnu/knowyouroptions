import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '../components/Card';
import styled from 'styled-components';
import Image from 'next/image';
import homepagePic from '../public/home-image.png';
import Layout from '../components/Layout';
import { colors, maxDevice, size } from '../templates/mediaSizes';
import SurveyPopup from '../templates/survey/SurveyPopup';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${colors.homepageBackground};
  .title-below {
    @media (min-width: ${size.laptop + 1}px) {
      display: block;
    }
  }
  .title-above {
    @media ${maxDevice.laptop} {
      display: block;
    }
  }
`;

const HomeTitle = styled.h1`
  font-family: din-2014;
  display: none;
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
  max-width: 75vh;
`;
const ImageContent = styled(Image)``;

const Home = (): ReactElement => {
  const [showPopup, togglePopup] = useState(false);

  const router = useRouter();

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('hi');
    togglePopup(false);
  };

  useEffect(() => {
    console.log(router.query.popup);
    router.query.popup ? togglePopup(true) : togglePopup(false);
  }, []);

  return (
    <Layout>
      <HomeContainer>
        {showPopup ? (
          <SurveyPopup onClickHandler={buttonClickHandler} />
        ) : (
          console.log('nope')
        )}
        <HomeTitle>Home</HomeTitle>
        <ImageContainer>
          <ImageContent src={homepagePic} placeholder="blur" />
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
