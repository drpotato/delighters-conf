import React from "react";
import Link from "next/link";

import styles from "./Hero.module.scss";
import { useTypeWriter } from "../hooks/useTypeWriter";
import Illo from "../public/hero.svg";

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
        <p className={[styles.typewriter, styles.left].join(" ")}>
          <span style={{ color: "#000F9F", textOverflow: "wrap" }}>
            {titleTyped}
          </span>
          <span style={{ textOverflow: "wrap" }}>{titleUntyped}</span>
        </p>
        <p className={[styles.typewriter, styles.right].join(" ")}>
          <span style={{ color: "#000F9F", textOverflow: "wrap" }}>
            {subtitleTyped}
          </span>
          <span style={{ textOverflow: "wrap" }}>{subtitleUntyped}</span>
        </p>
        <div className={styles.paragraph}>
          <p>
            Secure your spot and connect with some of Sydney’s best product
            engineers
          </p>
          <Link href="/sign-up" scroll={false}>
            <a className={styles.cta}>Sign Up</a>
          </Link>
        </div>
      </section>
      <div style={{ width: "100%" }}>
        <Illo />
      </div>
    </>
  );
};

export default Hero;
