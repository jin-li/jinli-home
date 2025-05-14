import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styles from './App.module.scss';
import SwapButton from './components/SwapButton/SwapButton';
import LeftPanel from './view/LeftPanel/LeftPanel';
import RightPanel from './view/RightPanel/RightPanel';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const { t, i18n } = useTranslation(['site', 'footer']); // Use the translation hook here
  const [showLeft, setShowLeft] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  // Handle screen resize and viewport height adjustment
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLandscape(window.innerWidth > window.innerHeight);

      if (window.innerWidth < window.innerHeight) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      } else {
        document.documentElement.style.removeProperty('--vh');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundUrl = t('background', {ns: 'site'}) || './assets/bg.jpg'; // Default background image
  const containerStyle = {
    background: `url(${backgroundUrl}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('title', {ns: 'site'})}</title>
        <meta name="description" content={t('description', {ns: 'site'})} />
        <meta name="keywords" content={t('keywords', {ns: 'site'})} />
        <meta name="author" content={t('author', {ns: 'site'})} />
        <link id="favicon" rel="icon" href={t('favicon', {ns: 'site'})} type="image/x-icon" />
        <link rel="apple-touch-icon" href={t('apple_touch_icon', {ns: 'site'})} />
      </Helmet>
      <div
        className={`${styles.container} ${isMobile && isLandscape ? styles.landscape : ''}`}
        style={containerStyle}
      >
        <div className={styles.panels}>
          <div className={`${styles.panel} ${isMobile && !showLeft ? styles.hidden : ''}`}>
            <LeftPanel />
          </div>
          <div className={`${styles.panel} ${isMobile && showLeft ? styles.hidden : ''}`}>
            <RightPanel />
          </div>
        </div>

        {isMobile && <SwapButton onSwap={() => setShowLeft(!showLeft)} showLeft={showLeft} />}

        <Footer startYear={t('start_year', {ns: 'footer'})} author={t('author', {ns: 'footer'})} />
      </div>
    </>
  );
};

export default App;