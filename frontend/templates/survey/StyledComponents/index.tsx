import styled from 'styled-components';
import SvgRightArrowWhite from '../../../public/right-arrow-white.svg';
import React, { ReactElement } from 'react';

const MoveForwardButtonStyled = styled.div`
  background-color: #911d7a;
  border-radius: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  padding: 0.75rem 1.5rem;
`;

const SubmitButtonStyled = styled.div`
  background-color: #911d7a;
  border-radius: 0.25rem;
  color: white;
  height: 7vh;
  justify-content: center;
  margin-left: auto;
  padding: 1rem 4rem;
  vertical-align: middle;
  width: 50vw;
`;

const MoveForwardButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}): ReactElement => {
  return (
    <MoveForwardButtonStyled
      onClick={(event) => {
        onClick(event);
      }}
    >
      <SvgRightArrowWhite />
    </MoveForwardButtonStyled>
  );
};

const SubmitButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}): ReactElement => {
  return (
    <SubmitButtonStyled
      onClick={(event) => {
        onClick(event);
      }}
    >
      Submit
    </SubmitButtonStyled>
  );
};

export { MoveForwardButton, SubmitButton };
