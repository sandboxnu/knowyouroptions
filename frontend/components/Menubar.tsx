import { ReactElement, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import { size } from '../templates/mediaSizes';
import sizeOfWindowHook from '../hooks/WindowSize';
const Menubar = (): ReactElement => {
  const windowSize = sizeOfWindowHook();

  if (!windowSize.width) return <Sidebar />;

  return windowSize.width < size.laptop + 1 ? <Sidebar /> : <NavBar />;
};

export default Menubar;
