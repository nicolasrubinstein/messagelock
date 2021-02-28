import React, { useState } from "react";
import styles from "../styles/Decode.module.scss";
import { url } from "../constants";
import axios from "axios";

const Decode = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.length) return;
    setMessage("");
    setIsLoading(true);
    const resp = await axios({
      method: "get",
      url: `${url}/${code}`,
    });
    if (!resp.data.text) {
      setMessage("Sorry, we couldn't find your message!");
      setIsLoading(false);
      setStatus(false);
      return;
    }
    setStatus(true);
    setIsLoading(false);
    setMessage(resp.data.text);
  };

  return (
    <div className={styles.decode}>
      <div className={styles.head}>
        <h1>Decode a message</h1>
        <h1>Enter your message code below.</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          spellCheck={false}
          type="text"
          placeholder="ex. 2d210a3"
          value={code}
          onChange={(e) => {
            if (e.target.value.length < 8) setCode(e.target.value);
          }}
        />
        <button type="submit">Get messsage</button>
      </form>
      <section>
        <h4 style={{ fontWeight: "400" }}>{isLoading && "Working on it..."}</h4>
        <h3 style={{ fontWeight: "400" }}>
          {message && status && "Your secret message is:"}
        </h3>
        <h2>{message}</h2>
      </section>
    </div>
  );
};

export default Decode;
