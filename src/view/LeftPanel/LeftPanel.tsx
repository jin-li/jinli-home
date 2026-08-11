import React from 'react';
import Logo from '../../components/Logo/Logo';
import Description from '../../components/Description/Description';
import Socials from '../../components/Socials/Socials';
import styles from './LeftPanel.module.scss';
import { useConfig } from '../../config';

const LeftPanel: React.FC = () => {
  const { config } = useConfig();
  return (
    <div className={styles.leftside}>
      <Logo siteLogo={config.site.logoUrl} />
      <Description
        descriptionText={
          {
            slogan: config.site.slogan,
            hello: config.site.hello
          }
        }
      />
      <Socials />
    </div>
  );
};

export default LeftPanel;
