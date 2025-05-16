import React from "react";
import { useTranslation } from "react-i18next";
import { RiTranslate2 } from "react-icons/ri"; // Import the translate icon
import styles from "./Footer.module.scss";

interface FooterProps {
  startYear: string;
  author: string;
}

const Footer: React.FC<FooterProps> = ({ startYear, author }) => {
  const { t, i18n } = useTranslation('ui'); // Use the 'ui' namespace
  const currentYear = new Date().getFullYear();

  // Function to toggle the language
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  // Show the language to switch to
  const nextLanguage = i18n.language === 'en' ? '简体中文' : 'English';

  return (
    <div className={styles.footer}>
      <button onClick={toggleLanguage} className={styles.languageSwitcher}>
        <span className={styles.icon}>
          <RiTranslate2 size={20} />
        </span>
        <span className={styles.text}>{nextLanguage}</span>
      </button>
      <span className={styles.copyright}>
        {t("copyright", { startYear, currentYear, author })}
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