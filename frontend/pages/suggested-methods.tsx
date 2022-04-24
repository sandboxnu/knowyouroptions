import { Button } from 'antd';
import styled from 'styled-components';
import { API, Contraceptive } from '../api-client';
import Header from '../components/Header';
import { Method } from '../components/Method';
import 'antd/dist/antd.css';
import router from 'next/router';

const MethodsCount = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #808080;
  margin-top: 54px;
  margin-bottom: 40px;
`;

const BodyWidthContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;

const Container = styled.div`
  display: flex;
  gap: 48px;
`;

const MoveForwardButtonStyled = styled(Button)`
  position: fixed;
  right: 30px;
  bottom: 34px;
  background: #911d7a;
  border-color: #911d7a;

  :hover {
    background: #911d7a;
    border-color: #911d7a;
  }
`;

const SuggestedMethods = ({
  contraceptives,
}: {
  contraceptives: Contraceptive[];
}): JSX.Element => {
  const contraceptiveMap = (contraceptive: Contraceptive) => {
    const img = (
      <img src={`bookmarks-icons/${contraceptive.name.toLowerCase()}.svg`} />
    );

    return (
      <Method
        icon={img}
        name={contraceptive.name}
        effectiveRate={contraceptive.effectiveRate}
        usePatternHighBound={contraceptive.usePatternHighBound}
        usePatternUnits={contraceptive.usePatternUnits}
        costMin={contraceptive.costMin}
        costMax={contraceptive.costMax}
        whoAdministers={contraceptive.whoAdministers}
        showBookmark={false}
      ></Method>
    );
  };

  const continueClicked = () => {
    router.push('/');
  };

  return (
    <div>
      <Header title="Suggested methods"></Header>
      <BodyWidthContainer>
        <MethodsCount>{`${contraceptives.length} methods`}</MethodsCount>
        <Container>{contraceptives.map(contraceptiveMap)}</Container>{' '}
      </BodyWidthContainer>
      <MoveForwardButtonStyled
        type="primary"
        shape="round"
        icon={<img src="right-arrow-white.svg"></img>}
        size="large"
        onClick={continueClicked}
      />
    </div>
  );
};

export default SuggestedMethods;

SuggestedMethods.getInitialProps = async (ctx) => {
  // Eventually, use some endpoint to algorithmically
  // produce the suggested contracepties
  const contraceptives = await API.contraceptive.getAll();
  return { contraceptives: contraceptives };
};
