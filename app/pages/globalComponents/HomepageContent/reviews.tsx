"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../css/section/reviews.module.css";
import navigationButtonStyles from "../../../css/components/navigationButton.module.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Reviews: React.FC = () => {
  return (
    <>
      <div className={styles.reviews}>
        <div className={styles.reviews__bg}>
          <Image
            src={"/images/about.png"}
            alt={"reviews background"}
            loading={"lazy"}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.reviews__container}>
          <h2 className={styles.reviews__title}>
            What they have <br /> to say about us!
          </h2>

          <Swiper
            className={styles.reviews__wrapper}
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={60}
            navigation={{
              nextEl: `.${navigationButtonStyles["swiper-button-next"]}`,
              prevEl: `.${navigationButtonStyles["swiper-button-prev"]}`,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
          >
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                “Clean and modern, well-managed and well-equipped, with an
                outstanding location on the canal across from the Atwater
                Market. Good atmosphere.”
              </p>
              <p className={styles["reviews__box-name"]}>- Phil Kurtz</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                “2727 coworking has very clean premises, and all members are so
                friendly and open-minded! Also, very easy to get by using public
                transport. The facilities were very well maintained, just an
                overall very accommodating workspace with everything you need! I
                would highly recommend it!”
              </p>
              <p className={styles["reviews__box-name"]}>- Kelly Hanson</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                “Great place and a very convenient location to get to. Always
                very clean and everyone there is super friendly!”
              </p>
              <p className={styles["reviews__box-name"]}>- Jules Garufi</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                “Beautiful and cozy place near the Lachine Canal offers
                excellent amenities and a very friendly and professional
                workplace. I loved it!”
              </p>
              <p className={styles["reviews__box-name"]}>- Dima</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                “Could not be happier to have joined the 2727 coworking!”
              </p>
              <p className={styles["reviews__box-name"]}>
                - Avedis Tufenkdjian
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                “A great place to work, the best coworking in which I worked.”
              </p>
              <p className={styles["reviews__box-name"]}>- Jesus Hernandez</p>
            </SwiperSlide>
          </Swiper>

          <div className={navigationButtonStyles.navigation}>
            <div
              className={`${navigationButtonStyles.reviews} ${navigationButtonStyles["swiper-button-prev"]}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <path
                  d="M8.10531 24.7425L1.73627 18.3734L8.10532 12.0044"
                  stroke="#DB5E5E"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.07 18.3784H2.7644"
                  stroke="#DB5E5E"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`${navigationButtonStyles.reviews} ${navigationButtonStyles["swiper-button-next"]}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <path
                  d="M27.939 12.0044L34.3081 18.3734L27.939 24.7425"
                  stroke="#DB5E5E"
                  strokeWidth="1.63636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.974365 18.3691H33.28"
                  stroke="#DB5E5E"
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

export default Reviews;
