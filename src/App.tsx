import React from 'react';
import PanelContainer from './view/PanelContainer/PanelContainer';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useConfig } from './config';

const App: React.FC = () => {
  const { config } = useConfig();
  const { i18n } = useTranslation();

  const containerStyle = {
    background: `url(${config.site.background}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.resolvedLanguage || i18n.language} />
        <title>{config.site.title}</title>
        <meta name="description" content={config.site.description} />
        <meta name="keywords" content={config.site.keywords.join(', ')} />
        <meta name="author" content={config.site.author} />
        <link id="favicon" rel="icon" href={config.site.favicon} type="image/x-icon" />
        <link rel="apple-touch-icon" href={config.site.appleTouchIcon} />
      </Helmet>
      <div className={styles.container} style={containerStyle}>
        <PanelContainer />
        <Footer startYear={config.site.startYear} author={config.site.author} />
      </div>
    </>
  );
};

export default App;
