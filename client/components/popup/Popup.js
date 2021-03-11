import React, { useEffect } from "react";
import styles from "./popup.module.scss";
import gsap from "gsap";
import Image from "next/image";

const Popup = ({ code, onClose: handleClose }) => {
  useEffect(() => {
    gsap.from("#popup", { y: -1000, duration: 1 });
  }, []);

  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <div className={styles.super}>
      <textarea style={{ display: "none" }}>{code}</textarea>
      <div className={styles.container} id="popup">
        <h2>The code for your message is:</h2>
        <section className={styles.codeSection}>
          <h2>{code}</h2>
          <button onClick={() => copyToClipboard(code)}>
            <Image src="/copy.png" alt="copy" width={30} height={30} />
          </button>
        </section>
        <button onClick={handleClose} className={styles.ok}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
