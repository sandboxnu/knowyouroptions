import { ReactElement } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: salmon;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
`;

const HomeImage = styled.img`
  background-color: red;
  height: 50px;
  width: 100%;
`;

const LeftCard = styled(Card)`
  margin-right: 0.75rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
`;

const Home = (): ReactElement => {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <HomeImage />
      <Row>
        <LeftCard
          title="Methods"
          description="Explore the available contraceptive methods"
        />
        <Card
          title="Stories"
          description="Share your stories and experience with peers"
        />
      </Row>
      <Card
        title="Quiz"
        description="Take a short questionnaire to find the methods that fit your needs."
      />
    </HomeContainer>
  );
};

export default Home;
