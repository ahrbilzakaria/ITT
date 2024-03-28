import React from "react";
import styles from "./About.module.css";
import background from "../assets/background-about.webp";
import img1 from "../assets/about-imgs/Photo.webp";
import img2 from "../assets/about-imgs/Photo-1.webp";
import img3 from "../assets/about-imgs/Photo-2.webp";

export const About = () => {
  return (
    <div className={styles.about}>
      <img className={styles.background} src={background} alt="background" />
      <div className={styles.title}>
        <h1>About Us</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img className={styles.img1} src={img1} alt="img1" />
          <p>
            At Infotransit & Transport, we are committed to simplifying and
            optimizing logistics and transportation processes for small and
            medium-sized businesses. Leveraging our expertise and deep
            understanding of the challenges faced by these enterprises, we have
            developed an innovative platform that offers tailored solutions to
            meet their specific needs. Our experienced team works closely with
            our clients to identify inefficiencies in their logistics operations
            and design personalized strategies to overcome them. Whether it's
            managing shipments, optimizing routes, or improving inventory
            visibility, we are here to provide practical and cost-effective
            solutions.
          </p>
        </div>
        <div className={styles.section}>
          <img src={img2} alt="img2" />
          <p>
            What sets Infotransit & Transport apart is our customer-focused
            approach and commitment to delivering exceptional service. We
            understand that every business has unique needs, which is why we
            make it a priority to listen carefully to our clients and offer
            solutions that precisely meet their requirements.
          </p>
        </div>
        <div className={`${styles.section} ${styles.except}`}>
          <img src={img3} alt="img3" />
          <p>
            By choosing Infotransit & Transport as their logistics and
            transportation partner, businesses can expect seamless
            collaboration, increased operational efficiency, and cost reduction.
            We take pride in contributing to our clients' success by providing
            them with the tools and support needed to thrive in a dynamic and
            competitive business environment.
          </p>
        </div>
      </div>
    </div>
  );
};
