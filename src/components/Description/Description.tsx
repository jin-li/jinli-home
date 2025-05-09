import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styles from "./Description.module.scss";

interface Props {
  descriptionText: {
    slogan: string;
    hello: string;
  };
}

const Description: React.FC<Props> = ({ descriptionText }) => {
  return (
    <div className={styles.description}>
      <div className={styles.block}>
        <FaQuoteLeft className={styles.left} size={20} />
        <div className={styles.text}>
          <p>{descriptionText.slogan}</p>
          <p>{descriptionText.hello}</p>
        </div>
        <FaQuoteRight className={styles.right} size={20} />
      </div>
    </div>
  );
};

export default Description;
