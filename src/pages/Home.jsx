import React from "react";
import styles from "./Home.module.css";
import { Contactus } from "../components/Contactus";
import background from "../assets/background-home.webp";

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
            <p>
              Infotransit & Transport offers a comprehensive suite of services,
              including customs clearance and transportation solutions tailored
              to meet diverse business needs. Specializing in efficient route
              optimization and secure shipment management, we ensure timely
              deliveries while minimizing costs. Our innovative platform
              provides real-time inventory visibility, empowering businesses to
              streamline operations and drive success. Whether managing imports,
              exports, or optimizing supply chains, we're committed to
              simplifying logistics for our clients.
            </p>
          </div>
        </div>
      </div>
      <Contactus />
    </div>
  );
};
