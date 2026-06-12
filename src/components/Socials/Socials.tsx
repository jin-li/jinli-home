import React, { useState } from "react";
import styles from "./Socials.module.scss";
import * as FaIcons from "react-icons/fa6";
import * as TbIcons from "react-icons/tb";
import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

interface Social {
  label: string;
  name: string;
  icon: string;
  tip: string;
  url: string;
}

const iconLibs: Record<string, Record<string, IconType>> = {
  Fa: FaIcons as Record<string, IconType>,
  Tb: TbIcons as Record<string, IconType>,
};

const resolveIcon = (icon?: string): React.ReactNode => {
  if (!icon) {
    return null;
  }

  const prefix = icon.slice(0, 2);
  const lib = iconLibs[prefix];
  if (lib) {
    const Icon = lib[icon];
    if (Icon) return <Icon />;
  }

  const FallbackIcon = (FaIcons as Record<string, IconType>)[icon];
  if (FallbackIcon) return <FallbackIcon />;

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
