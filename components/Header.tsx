import Link from "next/link";

import styles from "./Header.module.css";
import Logo from "../public/logo.svg";

const Header = () => {
  return <header className={styles.header}>
    <Logo />
    <div className={styles.links}>
      <Link href="/about">What is Delighters?</Link>
      <Link href="/speakers">Speakers</Link>
      <Link href="/sign-up"><a className={styles.button} >Sign Up</a></Link>
    </div>
  </header>
}

export default Header
