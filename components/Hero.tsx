import React from "react";
import Image from "next/image";

import styles from "./Hero.module.css";

const Hero = ({}) => {
  return <>
    <section className={styles.hero}>
      <span className={styles.left}>Delighters Conference 2022</span>
      <span className={styles.right}>Experience is Everything</span>
    </section>
    <span>
      Secure your spot and connect with some of Sydney’s best product engineers
    </span>
    <div style={{width: "100%"}}>
      <img style={{width: "100%"}} alt="Hero" src="/hero.png"/>
    </div>
  </>;
};

export default Hero
