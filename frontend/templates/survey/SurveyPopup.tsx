import React, { ReactElement, useState } from 'react';
import Home from '../../pages';
import styled from 'styled-components';

const PopupStyled = styled.div`
  background-color: pink;
  margin: 2%;
  padding: 1rem 1rem;
  width: 96%;
  & > span {
    font-size: 1.5rem;
    color: gray;
    cursor: pointer;
    float: right;
  }
  & > p {
    margin: 4rem 3rem;
  }
`;
/*
const SurveyPopup = ({}): ReactElement => {
  return (
    <>
      <div id="surveySubmitted" className="modal">
        <PopupStyled className="modal-content">
          <span className="close">&times;</span>
          <p>Thank you for submitting the onboarding survey.</p>
        </PopupStyled>
        <Button>Explore APP</Button>
      </div>
    </>
  );
};

export default SurveyPopup;
*/
