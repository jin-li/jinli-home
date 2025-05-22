import React from 'react';
import { Carousel, Row, Col } from 'antd';
import { FaBlog, FaCloud, FaGitlab, FaClapperboard, FaBook, FaImages, FaPen, FaEnvelopesBulk, FaAnglesUp, FaServer } from "react-icons/fa6";
import styles from './Links.module.scss';
import { useTranslation } from 'react-i18next';

const iconMap: { [key: string]: React.ReactNode } = {
  "blog": <FaBlog />,
  "cloud": <FaCloud />,
  "git": <FaGitlab />,
  "media": <FaClapperboard />,
  "library": <FaBook />,
  "image": <FaImages />,
  "latex": <FaPen />,
  "mail": <FaEnvelopesBulk />,
  "update": <FaAnglesUp />,
  "monitor": <FaServer />
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
                    <div className={styles.icon}> {iconMap[item.label]} </div>
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
