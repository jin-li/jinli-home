import React from 'react';
import Logo from '../../components/Logo/Logo';
import Description from '../../components/Description/Description';
import Socials from '../../components/Socials/Socials';
import styles from './LeftPanel.module.scss';

const LeftPanel: React.FC = () => {
  return (
    <div className={styles.panel}>
      <Logo siteLogo={'avatar.jpg'} />
      <Description
        descriptionText={{
          slogan: "光锥之内，皆为命运。",
          hello: "既是相见，即为有缘。欢迎光临本站！",
        }}
      />
      <Socials />
    </div>
  );
};

export default LeftPanel;