import { ReactElement, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import { size } from '../templates/mediaSizes';
import useWindowSize from '../hooks/UseWindowSize';
const Menubar = (): ReactElement => {
  const windowSize = useWindowSize();

  if (!windowSize.width) return <Sidebar />;

  return windowSize.width < size.laptop + 1 ? <Sidebar /> : <NavBar />;
};

export default Menubar;
