import { useState, useEffect } from 'react';

const useOrientation = () => {
  const getOrientation = () => 
    (window.innerWidth < window.innerHeight) || (window.innerWidth < 640) ? 'portait' : 'landscape';

  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handleResize = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return orientation;
};

export default useOrientation;
