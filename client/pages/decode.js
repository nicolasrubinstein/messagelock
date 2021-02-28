import React, { useState } from "react";
import styles from "../styles/Decode.module.scss";
import { url } from "../constants";
import axios from "axios";

const Decode = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const resp = await axios({
      method: "get",
      url: `${url}/${code}`,
    });
    if (resp.status === 400) {
      console.log("st 400");
      return;
    }
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
        <h2>{message}</h2>
      </section>
    </div>
  );
};

export default Decode;
