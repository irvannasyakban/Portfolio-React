/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:irfanna.syakban098@email.com">irfanna.syakban098@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://listwr.com/irvannasyakban">linkedin.com/irvannasyakban</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://www.github.com/irvannasyakban">github.com/irvannasyakban</a>
        </li>
      </ul>
    </footer>
  );
};