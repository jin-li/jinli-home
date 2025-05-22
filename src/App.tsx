import React from 'react';
import PanelContainer from './view/PanelContainer/PanelContainer';
import Footer from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import styles from './App.module.scss';
import { Helmet } from 'react-helmet-async';

const App: React.FC = () => {
  const { t, i18n } = useTranslation(['site', 'footer']);

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
      <div className={styles.container} style={containerStyle}>
        <PanelContainer />
        <Footer startYear={t("start_year", {ns: 'footer'})} author={t("author", {ns: 'footer'})} />
      </div>
    </>
  );
};

export default App;
