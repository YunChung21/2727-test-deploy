"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../css/section/rooms.module.css";
import navigationButtonStyles from "../../../css/components/navigationButton.module.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Rooms: React.FC = () => {
  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.rooms} id="rooms">
        <div className={styles.room__container}>
          <h2 className={styles.rooms__title}>Available Office Space</h2>
          <Swiper
            className={styles.rooms__wraper}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={60}
            navigation={{
              nextEl: `.${navigationButtonStyles["swiper-button-next"]}`,
              prevEl: `.${navigationButtonStyles["swiper-button-prev"]}`,
            }}
            modules={[Navigation]}
          >
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/7.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>1 PERSON HOTDESK</h3>
              <p className={styles["rooms__box-price"]}>$300/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/2.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>
                1 Person Dedicated Desk
              </h3>
              <p className={styles["rooms__box-price"]}>$450/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/1.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>
                1 Person Closed Office
              </h3>
              <p className={styles["rooms__box-price"]}>$600/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/3.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>
                3 Person Closed Office
              </h3>
              <p className={styles["rooms__box-price"]}>$1400/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/4.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>
                4 Person Closed Office
              </h3>
              <p className={styles["rooms__box-price"]}>$1800/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/5.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>
                8 Person Closed Office
              </h3>
              <p className={styles["rooms__box-price"]}>$2500/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles.rooms__box}>
              <div className={styles["rooms__box-img"]}>
                <Image
                  src={"/images/slider/6.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className={styles["rooms__box-title"]}>
                10 Person Closed Office
              </h3>
              <p className={styles["rooms__box-price"]}>$3000/ Per Month</p>
              <a
                onClick={() => scrollToElement("contacts")}
                className={`main__btn ${styles["rooms__box-btn"]}`}
              >
                Book Now
              </a>
            </SwiperSlide>
          </Swiper>
          <div className={`${navigationButtonStyles.navigation}`}>
            <div
              className={`${navigationButtonStyles.rooms} ${navigationButtonStyles["swiper-button-prev"]}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <path
                  d="M8.10531 25.4027L1.73627 19.0336L8.10532 12.6646"
                  stroke="white"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.07 19.0381H2.7644"
                  stroke="white"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`${navigationButtonStyles.rooms} ${navigationButtonStyles["swiper-button-next"]}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <path
                  d="M27.939 12.6545L34.3081 19.0236L27.939 25.3926"
                  stroke="white"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.974365 19.0188H33.28"
                  stroke="white"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
