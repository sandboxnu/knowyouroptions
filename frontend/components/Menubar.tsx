import { ReactElement, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import { SIZES } from '../Constants';

const Menubar = (): ReactElement => {
  const size = useWindowSize();

  if (!size.width) return <Sidebar />;

  return size.width <= 992 ? <Sidebar /> : <NavBar />;
};

// Hook - https://usehooks.com/useWindowSize/
function useWindowSize() {
  const initialState: {
    width: number | undefined;
    height: number | undefined;
  } = {
    width: undefined,
    height: undefined,
  };

  const [windowSize, setWindowSize] = useState(initialState);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default Menubar;
