import React from 'react';
import TimeBox from '../../components/TimeBox/TimeBox';
import Links from '../../components/Links/Links';
import styles from './RightPanel.module.scss';

const RightPanel: React.FC = () => {
  return (
    <div className={styles.panel}>
      <TimeBox />
      <Links />
    </div>
  );
};

export default RightPanel;