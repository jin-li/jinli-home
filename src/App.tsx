import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import SwapButton from './components/SwapButton/SwapButton';
import TimeBox from './components/TimeBox/TimeBox';
import Logo from './components/Logo/Logo';
import Description from './components/Description/Description';
import SocialLinks from './components/Socials/Socials';
import Links from './components/Links/Links';

const App: React.FC = () => {
  const [showLeft, setShowLeft] = useState(true);
  const isMobile = window.innerWidth < 768;

  // Fix for mobile viewport height
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.panels}>
        <div className={`${styles.panel} ${isMobile && !showLeft ? styles.hidden : ''}`}>
          <Logo siteLogo={'avatar.jpg'} />
          <Description
            descriptionText={{ slogan: "光锥之内，皆为命运。", hello: "既是相见，即为有缘。欢迎光临本站！" }}
          />
          <SocialLinks />
        </div>
        <div className={`${styles.panel} ${isMobile && showLeft ? styles.hidden : ''}`}>
          <TimeBox />
          <Links />
        </div>
      </div>

      {isMobile && <SwapButton onSwap={() => setShowLeft(!showLeft)} />}

      <footer className={styles.footer}>
        Copyright © 2021 - 2025 锦李本鲤
      </footer>
    </div>
  );
};

export default App;