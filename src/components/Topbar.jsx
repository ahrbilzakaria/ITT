import React from "react";
import styles from "./Topbar.module.css";
import logo from "../assets/Logo.svg";
import svg1 from "../assets/Icon.svg";
import svg2 from "../assets/Icon-1.svg";
import svg3 from "../assets/Icon-2.svg";
export const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <a href="/home">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <div className={styles.adress}>
          <div className={styles.element}>
            <img className={styles.icon} src={svg1} alt="icon" />
            <div className={styles.text}>
              <p>Coming soon</p>
            </div>
          </div>
          <div className={styles.element}>
            <img className={styles.icon} src={svg2} alt="icon" />
            <div className={styles.text}>
              <p>
                <a href="mailto: Informeltransittransport@gmail.com">
                  Email <br />
                  Informeltransittransport@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={styles.element}>
            <img className={styles.icon} src={svg3} alt="icon" />
            <div className={styles.text}>
              <p>
                +212 630586631 <br />
                +212 677246559
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
