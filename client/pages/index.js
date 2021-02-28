import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import gsap from "gsap";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    gsap.from("#title", { scale: 0.1, duration: 1 });
  }, []);
  return (
    <div className={styles.container}>
      <h1 id="title">{"{{name}}"}</h1>
      <h2 className={styles.slogan}>Where your messages remain secret.</h2>
      <div className={styles.moving}>
        <Image src="/padlock.gif" width={300} height={300} />
      </div>
    </div>
  );
};

export default Home;
