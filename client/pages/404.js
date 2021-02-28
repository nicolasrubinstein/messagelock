import React, { useEffect } from "react";
import router from "next/router";

const NotFound = () => {
  useEffect(() => {
    router.push("/");
  }, []);
  return <div></div>;
};

export default NotFound;
