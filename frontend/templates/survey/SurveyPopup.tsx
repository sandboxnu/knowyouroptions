import React, { ReactElement, useState } from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';

const PopupContainer = styled.div`
  height: 50%;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
`;

const PopupStyled = styled.div`
  background-color: pink;
  padding: 1rem 1rem;

  & > span {
    font-size: 1.5rem;
    color: gray;
    cursor: pointer;
    float: right;
  }
  & > p {
    margin: 4rem 3rem;
  }
  z-index: 100;
  outline: none;
  padding: 3.2rem;
  text-align: center;
  border-radius: 0.5rem;
  position: fixed;
  margin-top: 20%;
`;

/**
 * make the div conditional once the popup dissapears so users can click on other page elements
 */

export interface SurveyPopupInputProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}
const SurveyPopup = ({
  onClickHandler,
}: SurveyPopupInputProps): ReactElement => {
  return (
    <>
      <PopupContainer>
        <PopupStyled className="modal-content">
          <span className="close">&times;</span>
          <p>Thank you for submitting the onboarding survey.</p>
          <button onClick={onClickHandler}>Explore App</button>
        </PopupStyled>
      </PopupContainer>
    </>
  );
};

export default SurveyPopup;
