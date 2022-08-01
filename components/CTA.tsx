import React from "react";
import styles from "./CTA.module.scss";
import Link from "next/link";
import { HorizontalLine } from "./HorizontalLine";

export const CTA = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <span>Hey there!</span>
          <HorizontalLine theme="dark" />
        </div>
        <div className={styles.cta}>
          We can’t wait to see you at the Delighters Conference!
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <span>Experience is everything</span>
          <span>September 8th, 2022</span>
        </div>
        <Link href={"/sign-up"} scroll={false}>
          <a className={styles.button}>
            <span>Get your ticket</span>
            <span style={{ width: "16px", textAlign: "center" }}>↗</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
