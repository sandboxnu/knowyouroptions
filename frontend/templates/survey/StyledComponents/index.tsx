import styled from 'styled-components';
import SvgRightArrowWhite from '../../../public/right-arrow-white.svg';
import React, { ReactElement } from 'react';
import NativeSelect from '@mui/material/NativeSelect';

const DropdownStyled = styled(NativeSelect)`
  align-items: center;
  background-color: #ffebe7;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  height: 3rem;
  &::before {
    border-bottom: 0px !important;
  }
  &::after {
    border-bottom: 0px !important;
  }

  & > select {
    padding: 0.75rem 0 0.75rem 0.75rem;
  }

  & > select:focus {
    background-color: inherit;
    border-radius: inherit;
  }
  //padding: 0.75rem 0.75rem;
  width: 100%;

  & .MuiNativeSelect-icon {
    margin-right: 0.75rem;
    top: auto;
  }
`;

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

export { DropdownStyled, MoveForwardButton, SubmitButton };
