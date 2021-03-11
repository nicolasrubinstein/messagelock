import React, { useEffect } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const Content = ({ onClose }) => {
  useEffect(() => {
    gsap.from("#content-nav", { duration: 1, x: -1000 });
  }, []);
  return (
    <nav className={styles.containermob} id="content-nav">
      <div className={styles.close}>
        <Image
          src="/close.png"
          alt="close"
          width={30}
          height={30}
          onClick={onClose}
        />
      </div>
      <Link href="/">
        <a className={styles.first}>Home</a>
      </Link>
      <Link href="/craft">
        <a>Craft a message</a>
      </Link>

      <Link href="/decode">
        <a>Enter a message code</a>
      </Link>
    </nav>
  );
};

const MobileNav = ({ isActive, onClose, onOpen }) => {
  if (isActive) {
    return <Content onClose={onClose} />;
  } else {
    return (
      <div className={styles.navtrigger} onClick={onOpen}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
};

export default MobileNav;
