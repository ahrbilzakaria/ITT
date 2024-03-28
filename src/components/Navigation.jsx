import React from "react";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.pages}>
          <ul className={styles.ul}>
            <li>
              <a className={styles.page} href="/home">
                Home
              </a>
            </li>
            <li>
              <a className={styles.page} href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className={styles.except} href="/services">
                Services
              </a>
            </li>
          </ul>
        </div>
        <button className={styles.contact}>
          <a href="/home#contact">Contact us</a>
        </button>
      </div>
    </div>
  );
};
