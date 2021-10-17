import { ReactElement } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #ef8b6f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
`;

const HomeImage = styled.img`
  background-color: red;
  height: 50px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 1rem;
  width: 100%;
`;

const Home = (): ReactElement => {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <HomeImage />
      <Row>
        <Card
          title="Methods"
          description="Explore the available contraceptive methods"
          link="methods"
        />
        <Card
          title="Stories"
          description="Share your stories and experience with peers"
          link="stories"
        />
      </Row>
      <Card
        title="Quiz"
        description="Take a short questionnaire to find the methods that fit your needs."
        link="quiz"
      />
    </HomeContainer>
  );
};

export default Home;
