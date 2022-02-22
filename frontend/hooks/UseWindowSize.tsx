import { ReactElement, useEffect, useState } from 'react';
// Hook - https://usehooks.com/useWindowSize/
const useWindowSize = () => {
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
};

export default useWindowSize;
