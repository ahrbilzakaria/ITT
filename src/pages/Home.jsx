import React from "react";
import styles from "./Home.module.css";
import { Contactus } from "../components/Contactus";
import background from "../assets/background-home.webp";
import ico1 from "../assets/services-icons/Icon.svg";
import ico2 from "../assets/services-icons/Icon-1.svg";
import ico3 from "../assets/services-icons/Icon-2.svg";

export const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.background} src={background} alt="background" />
      <div className={styles.header}>
        <header className={styles.container}>
          <h1>
            Your Gateway to
            <br /> any Destination in
            <br /> the World
          </h1>
          <p>
            We are your one-stop solution for all transportation, transit, and
            logistics needs. With our expertise and global reach, we ensure
            smooth delivery of your goods, freeing you to focus on business
            growth. Count on us to connect you seamlessly to
            opportunities worldwide.{" "}
          </p>
          <button className={styles.contactus}>
            <a href="#contact">Contact us</a>
          </button>
        </header>
        <div className={styles.about}>
          <div className={styles.Title}>
            <div className={styles.ticket}>
              <p>who are we</p>
            </div>
            <h2> Simplifying Global Trade</h2>
          </div>
          <p>
            Welcome to Info-transit & Transport, specializing in customs
            clearance and tailored transportation services for businesses and
            entrepreneurs. With expertise and professionalism, we simplify
            international trade, ensuring seamless logistics and timely
            deliveries. Our dedicated team guides you through global commerce
            complexities. Partner with us for a trusted ally in your supply
            chain journey.
          </p>
        </div>
        <div className={styles.services}>
          <div className={styles.about}>
            <div className={styles.Title}>
              <div className={styles.ticket}>
                <p>Nos Services</p>
              </div>
              <h2>Our Main Services</h2>
            </div>
            <div className={styles.scontainer}>
              <div className={styles.service}>
                <img src={ico1} alt="icon" />
                <div>
                  <h3>Transportation (Maritime, Air, Road)</h3>
                  <p>
                    We offer efficient transportation solutions via maritime,
                    air, and road networks for timely delivery of goods
                    worldwide.
                  </p>
                </div>
              </div>
              <div className={styles.service}>
                <img src={ico2} alt="icon" />
                <div>
                  <h3>Customs Clearance</h3>
                  <p>
                    Our expert team ensures smooth customs clearance, minimizing
                    delays and ensuring compliance with regulations for seamless
                    international trade.
                  </p>
                </div>
              </div>
              <div className={styles.service}>
                <img src={ico3} alt="icon" />
                <div>
                  <h3>Legal Declaration</h3>
                  <p>
                    Streamline administrative tasks with our legal declaration
                    services, handling documentation efficiently to keep your
                    operations running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </div>
  );
};
