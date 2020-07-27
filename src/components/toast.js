import React, { useEffect } from "react";
import styles from "../styles/toast.module.css";

const Toast = (props) => {
  let timer = useEffect(() => {
    setTimeout(() => {
      props.handler();
    }, 3000);
    return () => clearTimeout(timer);
  }, [props]);
  return <div className={styles.toast}>{props.children}</div>;
};

export default Toast;
