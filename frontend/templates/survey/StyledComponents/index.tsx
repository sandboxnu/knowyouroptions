import styled from 'styled-components';
import SvgRightArrowWhite from '../../../public/right-arrow-white.svg';
import React, { ReactElement } from 'react';

const MoveForwardButtonStyled = styled.div`
  background-color: #911D7A;
  border-radius: 1.5rem;
  margin-left: auto;
  padding: 0.75rem 1.5rem;
`;

const MoveForwardButton = ({
  onClick
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}): ReactElement => {
  return (
    <MoveForwardButtonStyled onClick={(event) => {onClick(event)}}>
      <SvgRightArrowWhite/>
    </MoveForwardButtonStyled>
  )
};

export {
  MoveForwardButton,
};