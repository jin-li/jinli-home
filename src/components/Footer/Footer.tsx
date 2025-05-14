import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

interface FooterProps {
  startYear: string;
  author: string;
}

const Footer: React.FC<FooterProps> = ({ startYear, author }) => {
  const { t } = useTranslation('ui');
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <span className={styles.copyright}>
        {t("copyright", { startYear, currentYear, author})}
      </span>
      <span className={styles.design}>
        {t("designed_by")}{" "}
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