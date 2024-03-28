import React from "react";
import styles from "./Contactus.module.css";
import background from "../assets/Rectanglegradient.webp";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate inputs
    const formData = new FormData(form.current);
    const fullName = formData.get("from_name");
    const email = formData.get("user_email");
    const phoneNumber = formData.get("phone_number");
    const city = formData.get("city");

    if (!fullName || !email || !phoneNumber || !city) {
      alert("Please fill in all required fields");
      return;
    }

    // If all inputs are filled, proceed with sending email
    emailjs
      .sendForm(
        "service_glzuakb",
        "template_s28ks1r",
        form.current,
        "8akmlbsN9emIAUjEx"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles.contactus}>
      <img
        className={styles.background}
        src={background}
        alt="gradient rectangle"
      />
      <div className={styles.form}>
        <div className={styles.ticket}>
          <p>Contact</p>
        </div>
        <h2>Get in touch with us</h2>
        <p className={styles.comment}>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value.
        </p>
        <form ref={form} className={styles.content}>
          <div className={styles.data}>
            <input
              required
              name="from_name"
              className={styles.input}
              type="text"
              placeholder="Full name*"
            />
            <input
              className={styles.input}
              name="user_email"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Phone number*"
              name="phone_number"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="City*"
              name="city"
              required
            />
            <textarea
              className={styles.message}
              type="text"
              placeholder="Message"
              maxLength={300}
              name="message"
            />
          </div>
        </form>
        <button onClick={sendEmail} type="submit">
          Submit your message
        </button>
      </div>
    </div>
  );
};
