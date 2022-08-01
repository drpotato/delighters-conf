import React from "react";

import styles from "./InfoBlock.module.scss";

interface Props {
  image: string;
  heading: string;
  paragraphs: string[];
}

export const InfoBlock = ({ image, heading, paragraphs }: Props) => {
  return (
    <div className={styles.section}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.heading}>{heading}</span>
          <span className={styles.paragraph}>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
