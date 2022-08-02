import React from "react";
import Link from "next/link";

import styles from "./Header.module.scss";
import Logo from "../public/logo.svg";
import { className } from "./className";

const Header = React.forwardRef<HTMLElement>((_, ref) => (
  <header ref={ref} className={styles.header}>
    <div className={styles.inner}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          <Link href="/about" scroll={false}>
            <a className={className(styles.link, styles.light)}>
              <span>What is Delighters?</span>
              <span style={{ width: "16px", textAlign: "center" }}>↓</span>
            </a>
          </Link>
          <Link href="/speakers" scroll={false}>
            <a className={className(styles.link, styles.light)}>
              <span>Speakers</span>
              <span style={{ width: "16px", textAlign: "center" }}>↓</span>
            </a>
          </Link>
          <Link href="/sign-up" scroll={false}>
            <a className={className(styles.link, styles.dark)}>
              <span>Sign Up</span>
              <span style={{ width: "16px", textAlign: "center" }}>↗</span>
            </a>
          </Link>
        </div>
        <span
          style={{
            textAlign: "right",
            fontSize: "10px",
            textTransform: "capitalize",
          }}
        >
          Brought to you by Dovetail
        </span>
      </div>
    </div>
  </header>
));

Header.displayName = "Header";

export default Header;
