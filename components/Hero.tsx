import React from "react";
import Image from "next/image";

import styles from "./Hero.module.css";
import { useTypeWriter } from "../hooks/useTypeWriter";

const Hero = ({}) => {
  const [titleTyped, titleUntyped] = useTypeWriter(
    "Delighters Conference 2022"
  );
  const [subtitleTyped, subtitleUntyped] = useTypeWriter(
    "Experience is Everything"
  );
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.left}>
          <span style={{ color: "#000F9F", textOverflow: "wrap" }}>
            {titleTyped}
          </span>
          <span style={{ textOverflow: "wrap" }}>{titleUntyped}</span>
        </p>
        <p className={styles.right}>
          <span style={{ color: "#000F9F", textOverflow: "wrap" }}>
            {subtitleTyped}
          </span>
          <span style={{ textOverflow: "wrap" }}>{subtitleUntyped}</span>
        </p>
      </section>
      <span>
        Secure your spot and connect with some of Sydney’s best product
        engineers
      </span>
      <div style={{ width: "100%" }}>
        <img
          style={{ display: "block", width: "100%" }}
          alt="Hero"
          src="/hero.png"
        />
      </div>
    </>
  );
};

export default Hero;
