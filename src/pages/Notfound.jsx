import React from "react";
import styles from "./Notfound.module.css";

export const Notfound = () => {
  return (
    <div className={styles.error}>
      <h1>
        ERROR 404
        <br />
        Page Not Found
      </h1>
    </div>
  );
};
