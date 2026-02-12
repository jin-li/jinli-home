import React from 'react';
import { Carousel, Row, Col } from 'antd';
import * as FaIcons from "react-icons/fa6";
import type { IconType } from "react-icons";
import styles from './Links.module.scss';
import { useTranslation } from 'react-i18next';

const resolveIcon = (icon?: string): React.ReactNode => {
  if (!icon) {
    return null;
  }

  const Icon = (FaIcons as Record<string, IconType>)[icon];
  if (Icon) {
    return <Icon />;
  }

  return <img src={icon} alt="" />;
};

const chunkArray = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const RightPanel: React.FC = () => {
  const { t } = useTranslation('links');
  const links = t('links', { returnObjects: true }) as Array<{
    label: string;
    name: string;
    icon: string;
    url: string;
  }>;

  const pages = chunkArray(links, 6);

  return (
    <div className={styles.wrapper}>
      <Carousel
        arrows
        dots={true}
        dotPosition="bottom"
        infinite={false}
        adaptiveHeight
        className={styles.carousel}
      >
        {pages.map((page, index) => (
          <div className={styles.slide} key={index}>
            <Row 
              gutter={[12, 12]}
              justify="center"
            >
              {page.map((item: any, idx: any) => (
                <Col key={item.label} style={{ width: '33.33%'}}>
                  <a
                    className={styles.tile}
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.icon}>{resolveIcon(item.icon)}</div>
                    <div className={styles.label}>{item.name}</div>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RightPanel;
