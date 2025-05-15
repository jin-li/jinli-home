import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale'; // Import the Chinese locale
import styles from './TimeBox.module.scss';

const TimeBox: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { t, i18n } = useTranslation('time'); // Use i18n to get the current language

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const dateFormat = t('date_format', { defaultValue: 'yyyy-MM-dd EEEE' }); // Fallback if not defined
    const locale = (i18n.language === 'zh' || i18n.language === 'zh-CN') ? zhCN : undefined; // Use zhCN locale for Chinese
    return format(date, dateFormat, { locale });
  };

  const formatTime = (date: Date) => {
    const timeFormat = t('time_format', { defaultValue: 'HH:mm:ss' }); // Fallback if not defined
    return format(date, timeFormat); // No locale needed for time
  };

  return (
    <div className={styles.box}>
      <div className={styles.datetime}>
        <div className={styles.date}>
          {formatDate(time)}
        </div>
        <div className={styles.time}>
          {formatTime(time)}
        </div>
      </div>
    </div>
  );
};

export default TimeBox;