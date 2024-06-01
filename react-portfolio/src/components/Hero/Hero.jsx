import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adeba Islam</h1>
        <p className={styles.description}>
          I am a fourth-year Software Engineering student at Islamic
          University of Technology, passionate about creating
          innovative software solutions.
        </p>
        <a href="mailto:adebaislam@iut-dhaka.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles['circular-image']}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
