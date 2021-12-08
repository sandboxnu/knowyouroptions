import React, { ReactElement } from 'react';
import styled from 'styled-components';
import QuestionnaireSvg from '../../public/questionnaire.svg';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
  padding: 0 2rem;
  margin-top: auto;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const GetStartedButtonStyled = styled.div`
  background-color: #7e1a6a;
  border-color: transparent;
  border-radius: 0.25rem;
  border-width: 0;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
`;

const ImageContainer = styled.div`
  align-items: center;
  background-color: #ffbba8;
  display: flex;
  height: 50vh;
  justify-content: center;
  padding: 0rem 0rem;
`;

const QuestionnaireDescription = styled.p`
  font-family: 'roboto';
  font-size: 0.9rem;
  padding: 1rem 1rem;
  margin-top: 0rem;
  text-align: center;
`;

const QuestionnaireHeading = styled.h1`
  font-family: 'Din 2014';
  margin-bottom: 0;
  margin-top: 2rem;
  text-align: center;
`;

const GetStartedButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}): ReactElement => {
  return (
    <GetStartedButtonStyled
      onClick={(event) => {
        onClick(event);
      }}
    >
      Get Started
    </GetStartedButtonStyled>
  );
};

export interface StartPageProps {
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
}

const QuestionnaireStartPage = ({
  onClickForwards,
  onClickBackwards,
}: StartPageProps): ReactElement => {
  return (
    <>
      <Container>
        <ImageContainer>
          <QuestionnaireSvg />
        </ImageContainer>
        <Body>
          <QuestionnaireHeading>Questionnaire</QuestionnaireHeading>
          <QuestionnaireDescription>
            This will help you identify what’s important to you about your birth
            control method. By thinking through what matters to you, you’ll be
            able to find the best fit for you. Select the button to indicate
            your choice.
          </QuestionnaireDescription>
        </Body>
        <ButtonContainer>
          <GetStartedButton onClick={onClickForwards} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default QuestionnaireStartPage;
