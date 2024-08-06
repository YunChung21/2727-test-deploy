"use client";
import React from "react";
import styles from "../../../css/section/hero.module.css";

const Hero: React.FC = () => {
  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__background}>
          <img src="images/hero.jpeg" alt="" loading="lazy"></img>
        </div>
        <div className={styles.hero__container}>
          <h2 className={styles.hero__suptitle}>High-End Coworking Offices</h2>
          <h1 className={styles.hero__title}>in Montreal</h1>
          <p className={styles.hero__text}>
            Comfortable Spaces for Innovative Entrepreneurs, right Next to the
            Canal Lachine!
          </p>
          <a
            className={`main__btn ${styles.hero__btn}`}
            onClick={() => scrollToElement("rooms")}
          >
            View Prices & Photos
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
