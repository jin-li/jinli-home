import React from 'react';
import Links from '../../components/Links/Links';
import styles from './RightPanel.module.scss';
import TimeBox from '../../components/TimeBox/TimeBox';


const RightPanel: React.FC = () => {
  return (
    <div className={styles.rightPanel}>
      <TimeBox />
      <Links />
    </div>
  );
};

export default RightPanel;
