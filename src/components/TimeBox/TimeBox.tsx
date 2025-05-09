import React, { useEffect, useState } from 'react';
import styles from './TimeBox.module.scss';

const TimeBox: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) =>
    date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  return (
    <div className={styles.box}>
      <div className={styles.datetime}>
        <div className={styles.date}>
          {formatDate(time)}
        </div>
        <div className={styles.time}>
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
