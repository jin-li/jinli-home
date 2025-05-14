import React from 'react';
import Logo from '../../components/Logo/Logo';
import Description from '../../components/Description/Description';
import Socials from '../../components/Socials/Socials';
import styles from './LeftPanel.module.scss';
import { useTranslation } from "react-i18next";

const LeftPanel: React.FC = () => {
  const { t } = useTranslation(['logo', 'description']);

  return (
    <div className={styles.panel}>
      <Logo siteLogo={t('avatar', {ns: 'logo'})} />
      <Description
        descriptionText={
          {
            slogan: t('slogan', {ns: 'description'}),
            hello: t('hello', {ns: 'description'})
          }
        }
      />
      <Socials />
    </div>
  );
};

export default LeftPanel;