import React, { MouseEventHandler, ReactElement, useState } from 'react';
import styled from 'styled-components';
import SvgX from '../public/x.svg';

const Ok = styled.button`
  align-self: center;
  background-color: #911d7a;
  border-color: transparent;
  border-radius: 0.25rem;
  border-width: 0;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: Roboto;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  width: fit-content;
`;

const ToastContainer = styled.div`
  background-color: white;
  border: 0.1rem solid #6c6c6c;
  border-radius: 0.5rem;
  bottom: 0;
  box-shadow: #50505026 0 0 0 20rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-around;
  left: 0;
  margin: auto;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  transition-duration: 0.5s;
  width: 95%;
  z-index: 1;
`;

const ToastText = styled.p`
  align-self: center;
  color: #6c6c6c;
  font-family: din-2014;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
  text-align: center;
  width: 65%;
`;

const XIcon = styled(SvgX)`
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  flex: none;
  justify-self: flex-start;
  height: 1rem;
`;

const Toast = ({
  text,
  onClose,
  closeText = '',
}: {
  text: string;
  onClose: MouseEventHandler;
  closeText?: string;
}): ReactElement => {
  return (
    <ToastContainer>
      <XIcon onClick={onClose} />
      <ToastText>{text}</ToastText>
      <Ok onClick={onClose}>{closeText ? closeText : 'Ok'}</Ok>
    </ToastContainer>
  );
};

export default Toast;
