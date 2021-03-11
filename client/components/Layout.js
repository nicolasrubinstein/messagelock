import React from "react";
import Nav from "./nav/Nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MessageLock</title>
        <link
          rel="shortcut icon"
          href="icons/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div>
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
