import React from "react";
import styles from "./Logo.module.scss";

interface LogoProps {
  siteLogo: string;
}

const Logo: React.FC<LogoProps> = ({ siteLogo }) => {
  return (
    <div className={styles.logo}>
      <img className={styles.img} src={siteLogo} alt="logo" />
    </div>
  );
};

export default Logo;
