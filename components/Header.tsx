import Link from "next/link";

import styles from "./Header.module.css";
import Logo from "../public/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div style={{ marginTop: "8px" }}>
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
              border: "#000F9F 1px solid",
              borderTop: "none",
            }}
          >
            <Link href="/about">
              <a
                style={{
                  display: "flex",
                  justifyItems: "space-between",
                  gap: "26px",
                  padding: "10px 8px 7px 12px",
                  borderRight: "#000F9F 1px solid",
                }}
              >
                <span>What is Delighters?</span>
                <span style={{ width: "16px", textAlign: "center" }}>↓</span>
              </a>
            </Link>
            <Link href="/speakers">
              <a
                style={{
                  display: "flex",
                  justifyItems: "space-between",
                  gap: "26px",
                  padding: "10px 8px 7px 12px",
                }}
              >
                <span>Speakers</span>
                <span style={{ width: "16px", textAlign: "center" }}>↓</span>
              </a>
            </Link>
            <Link href="/sign-up">
              <a
                style={{
                  display: "flex",
                  justifyItems: "space-between",
                  gap: "26px",
                  padding: "10px 8px 7px 12px",
                  background: "#000F9F",
                  color: "#ffffff",
                }}
              >
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
};

export default Header;
