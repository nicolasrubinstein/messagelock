import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [width, setWidth] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  if (width > 700) {
    return (
      <nav className={styles.container1}>
        <Link href="/craft">
          <a>Craft a message</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/decode">
          <a>Enter a message code</a>
        </Link>
      </nav>
    );
  } else {
    return (
      <MobileNav
        isActive={showMobileNav}
        onClose={() => setShowMobileNav(false)}
        onOpen={() => setShowMobileNav(true)}
      />
    );
  }
};

export default Nav;
