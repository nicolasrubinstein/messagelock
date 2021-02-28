import React, { useState, useEffect } from "react";
import styles from "../styles/Craft.module.scss";
import { url } from "../constants";
import axios from "axios";

const Craft = () => {
  const [message, setMessage] = useState("");
  const [charsLeft, setCharsleft] = useState(25);
  const [word, setWord] = useState("characters");
  const [buttonText, setButtonText] = useState("Generate code");

  useEffect(() => {
    setCharsleft(30 - message.length);
    if (message.length === 29) {
      setWord("character");
    } else {
      setWord("characters");
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (charsLeft === 30) return;
    setButtonText("Generating code ...");
    const resp = await axios({
      method: "post",
      url,
      data: {
        text: message,
      },
    });
    setButtonText("Generate code");
    console.log(resp.data.uid);
  };

  return (
    <div className={styles.container}>
      <section className={styles.headings}>
        <h2>Write it.</h2>
        <h2>Share the code.</h2>
        <h2>Done.</h2>
      </section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          spellCheck={false}
          type="text"
          className={styles.input}
          value={message}
          onChange={(e) => {
            if (e.target.value.length < 31) setMessage(e.target.value);
          }}
          placeholder="Write anything, it's anonymous"
        />
        <small style={{ color: charsLeft ? "black" : "red" }}>
          {charsLeft} {word} left
        </small>
        <button type="submit" className={styles.submit}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Craft;
