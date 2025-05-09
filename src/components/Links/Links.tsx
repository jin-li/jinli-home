import React from 'react';
import { Carousel } from 'antd';
import linkItems from "../../assets/links.json";
import { FaBlog, FaCloud, FaGitlab, FaClapperboard, FaBook, FaImages, FaPen, FaEnvelopesBulk, FaAnglesUp, FaServer } from "react-icons/fa6";
import styles from "./Links.module.scss";

const ITEMS_PER_PAGE = 6;

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

const Links: React.FC = () => {
  // Split items into pages of 6
  const pages = Array.from({ length: Math.ceil(linkItems.length / ITEMS_PER_PAGE) }, (_, i) =>
    linkItems.slice(i * ITEMS_PER_PAGE, (i + 1) * ITEMS_PER_PAGE)
  );

  return (
    <div className={styles.wrapper}>
      <Carousel
        arrows
        dots={true}
        infinite={false}
        className={styles.carousel}
      >
        {pages.map((page, pageIndex) => (
          <div className={styles.slide} key={pageIndex}>
            <div className={styles.grid}>
              {page.map((item, idx) => (
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
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Links;
