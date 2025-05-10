import React from 'react';
import Logo from '../../components/Logo/Logo';
import Description from '../../components/Description/Description';
import Socials from '../../components/Socials/Socials';
import styles from './LeftPanel.module.scss';
import config from '../../config/config.yml';

const LeftPanel: React.FC = () => {
  return (
    <div className={styles.panel}>
      <Logo siteLogo={config.logo.avatar} />
      <Description
        descriptionText={config.description}
      />
      <Socials />
    </div>
  );
};

export default LeftPanel;