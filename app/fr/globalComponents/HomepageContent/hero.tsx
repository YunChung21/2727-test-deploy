"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../../css/section/hero.module.css";
import Image from "next/image";

const Hero: React.FC = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { xPercent: -15 }, // Start position
        {
          xPercent: 0, // End position
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            //markers: true, // Optional: to help debug
          },
        }
      );
    }
  }, []);

  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__background}>
          <Image
            ref={imgRef}
            src={"/images/hero.jpeg"}
            alt={"background Image"}
            width={500}
            height={300}
            loading="lazy"
          />
        </div>
        <div className={styles.hero__container}>
          <h2 className={styles.hero__suptitle}>
            Bureaux de coworking haut de gamme
          </h2>
          <h1 className={styles.hero__title}>à Montréal</h1>
          <p className={styles.hero__text}>
            Des espaces confortables pour les entrepreneurs innovateurs, juste à
            côté du Canal Lachine !
          </p>
          <a
            className={`main__btn ${styles.hero__btn}`}
            onClick={() => scrollToElement("rooms")}
          >
            Voir les prix et les photos
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
