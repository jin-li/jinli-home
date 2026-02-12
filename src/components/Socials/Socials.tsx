import React, { useState } from "react";
import styles from "./Socials.module.scss";
import * as FaIcons from "react-icons/fa6";
import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

interface Social {
  label: string;
  name: string;
  icon: string;
  tip: string;
  url: string;
}

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

const Socials: React.FC = () => {
  const { t } = useTranslation(['socials']);
  const socials = t('socials', { returnObjects: true }) as Array<Social>;

  const [socialTip, setSocialTip] = useState("");

  return (
    <div className={styles.social}>
      <div className={styles.link}>
        {socials.map((item: Social) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setSocialTip(item.tip)}
            onMouseLeave={() => setSocialTip("")}
          >
            <div className={styles.icon}>{resolveIcon(item.icon)}</div>
          </a>
        ))}
      </div>
      
      <span className={styles.tip}>{socialTip}</span>
    </div>
  );
};

export default Socials;
