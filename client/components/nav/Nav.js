import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link href="/craft">
        <a>Craft a message</a>
      </Link>
      <Link href="/decode">
        <a>Enter a message code</a>
      </Link>
    </nav>
  );
};

export default Nav;
