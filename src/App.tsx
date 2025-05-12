import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import SwapButton from './components/SwapButton/SwapButton';
import LeftPanel from './view/LeftPanel/LeftPanel';
import RightPanel from './view/RightPanel/RightPanel';
import config from './config/config.yml';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [showLeft, setShowLeft] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  // Handle screen resize and viewport height adjustment
  useEffect(() => {
    const handleResize = () => {
      // Update isMobile state
      setIsMobile(window.innerWidth < 768);

      // Update orientation state
      setIsLandscape(window.innerWidth > window.innerHeight);

      // Fix mobile viewport height issue for portrait mode
      if (window.innerWidth < window.innerHeight) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      } else {
        document.documentElement.style.removeProperty('--vh'); // Remove the custom property in landscape mode
      }
    };

    // Set initial viewport height and isMobile state
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundUrl = config.site.background || './assets/bg.jpg'; // Default background image
  const containerStyle = {
    background: `url(${backgroundUrl}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (
    <div
      className={`${styles.container} ${isMobile && isLandscape ? styles.landscape : ''}`}
      style={containerStyle}
    >
      <div className={styles.panels}>
        {/* Show LeftPanel or hide it based on `isMobile` and `showLeft` */}
        <div className={`${styles.panel} ${isMobile && !showLeft ? styles.hidden : ''}`}>
          <LeftPanel />
        </div>

        {/* Show RightPanel or hide it based on `isMobile` and `showLeft` */}
        <div className={`${styles.panel} ${isMobile && showLeft ? styles.hidden : ''}`}>
          <RightPanel />
        </div>
      </div>

      {/* Show SwapButton only on mobile */}
      {isMobile && <SwapButton onSwap={() => setShowLeft(!showLeft)} />}

      <Footer startYear={config.footer.start_year} author={config.footer.author} />
    </div>
  );
};

export default App;