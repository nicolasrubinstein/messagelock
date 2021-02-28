import React, { useEffect } from "react";
import styles from "./popup.module.scss";
import gsap from "gsap";

const Popup = ({ code, onClose: handleClose }) => {
  useEffect(() => {
    gsap.from("#popup", { y: -1000, duration: 1 });
  }, []);

  return (
    <div className={styles.super}>
      <div className={styles.container} id="popup">
        <h2>The code for your message is:</h2>
        <h2 style={{ marginTop: "-5px" }}>{code}</h2>
        <button onClick={handleClose}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
