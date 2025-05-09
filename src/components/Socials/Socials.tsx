import React, { useState } from "react";
import styles from "./Socials.module.scss";
import socialLinks from "../../assets/socials.json";
import { FaGithub, FaGoogleScholar, FaLinkedin, FaBilibili, FaYoutube, FaEnvelope } from "react-icons/fa6";

interface Social {
  label: string;
  name: string;
  icon: string;
  tip: string;
  url: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  "github": <FaGithub />,
  "googlescholar": <FaGoogleScholar />,
  "linkedin": <FaLinkedin />,
  "bilibili": <FaBilibili />,
  "youtube": <FaYoutube />,
  "email": <FaEnvelope />,
};

//<img className={styles.icon} src={item.icon} alt={item.name} />

const Socials: React.FC = () => {
  const [socialTip, setSocialTip] = useState("");

  return (
    <div className={styles.social}>
      <div className={styles.link}>
        {socialLinks.map((item: Social) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setSocialTip(item.tip)}
            onMouseLeave={() => setSocialTip("")}
          >
            <div className={styles.icon}>{ iconMap[item.label] }</div>
          </a>
        ))}
      </div>
      
      <span className={styles.tip}>{socialTip}</span>
    </div>
  );
};

export default Socials;
