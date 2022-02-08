import React, { ReactElement, useState } from 'react';
import SvgBookmark from '../public/bookmark.svg';
import styled from 'styled-components';

const Row = styled.nav`
  box-shadow: 0rem 0.75rem 1rem -0.5rem lightgrey;
  column-gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-y: hidden;
  padding: 0 1rem;
  margin: 0.5rem 0;
  wrap: no-wrap;
`;

const Bookmark = styled(SvgBookmark)`
  fill: white;
  position: relative;
  stroke: black;
  top: 2px;
`;

export const Navbar = ({}) => {
  return (
    <>
      <Row>
        <Bookmark />
      </Row>
    </>
  );
};
