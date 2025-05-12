import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
  startYear: number;
  author: string;
}

const Footer: React.FC<FooterProps> = ({ startYear, author }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.copyright}>
        Copyright © {startYear} - {new Date().getFullYear()} {author} 
      </span>
      <span className={styles.design}>
        Designed by{" "}
        <a
          href="https://github.com/jin-li"
          target="_blank"
          rel="noopener noreferrer"
        >
          jin-li
        </a>
      </span>
    </div>
  );
};

export default Footer;