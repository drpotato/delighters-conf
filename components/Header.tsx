import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";
import Logo from "../public/logo.svg";

const Header = React.forwardRef<HTMLElement>((_, ref) => {
  console.log(styles.linkLight);
  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.inner}>
        <div
          style={{
            paddingTop: "8px",
            flexGrow: 1,
            borderTop: "#000F9F 1px solid",
          }}
        >
          <Logo />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Link href="/about" scroll={false}>
              <a className={styles.linkLight}>
                <span>What is Delighters?</span>
                <span style={{ width: "16px", textAlign: "center" }}>↓</span>
              </a>
            </Link>
            <Link href="/speakers" scroll={false}>
              <a className={styles.linkLight}>
                <span>Speakers</span>
                <span style={{ width: "16px", textAlign: "center" }}>↓</span>
              </a>
            </Link>
            <Link href="/sign-up" scroll={false}>
              <a className={styles.linkDark}>
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
  );
});

Header.displayName = "Header";

export default Header;
