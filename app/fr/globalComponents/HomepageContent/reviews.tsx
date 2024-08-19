"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "../../../css/section/reviews.module.css";
import navigationButtonStyles from "../../../css/components/navigationButton.module.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
const Reviews: React.FC = () => {
  return (
    <>
      <div className={styles.reviews}>
        <div className={styles.reviews__bg}>
          <Image
            src={"/images/about.png"}
            alt={"backgrpung Image"}
            width={500}
            height={300}
            loading="lazy"
          />
        </div>
        <div className={styles.reviews__container}>
          <h2 className={styles.reviews__title}>
            Ce qu&rsquo;ils disent de nous <br /> de nous !
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
                &quot;Propre et moderne, bien géré et bien équipé, avec un
                emplacement exceptionnel sur le canal en face du marché Atwater.
                Bonne ambiance.&quot;
              </p>
              <p className={styles["reviews__box-name"]}>- Phil Kurtz</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                &quot;2727 coworking a des locaux très propres, et tous les
                membres sont si sympathiques et ouverts d&rsquo;esprit ! De
                plus, il est très facile de s&rsquo;y rendre en utilisant les
                transports en commun. Les installations sont très bien
                entretenues, c&rsquo;est un espace de travail très accommodant
                avec tout ce dont vous avez besoin ! Je le recommande vivement
                !&quot;
              </p>
              <p className={styles["reviews__box-name"]}>- Kelly Hanson</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                &quot;Un endroit génial et très pratique à atteindre. Toujours
                très propre et tout le monde est super sympa !&quot;.
              </p>
              <p className={styles["reviews__box-name"]}>- Jules Garufi</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                &quot;Bel endroit confortable près du canal de Lachine qui offre
                d&rsquo;excellentes commodités et un lieu de travail très amical
                et professionnel. J&rsquo;ai adoré !&quot;
              </p>
              <p className={styles["reviews__box-name"]}>- Dima</p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                &quot;Je ne pourrais pas être plus heureux d&rsquo;avoir rejoint
                le 2727 coworking !&quot;
              </p>
              <p className={styles["reviews__box-name"]}>
                - Avedis Tufenkdjian
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.reviews__box}>
              <p className={styles["reviews__box-text"]}>
                &quot;Un endroit génial pour travailler, le meilleur coworking
                dans lequel j&rsquo;ai travaillé.&quot;
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
                  stroke-width="1.63636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.07 18.3784H2.7644"
                  stroke="#DB5E5E"
                  stroke-width="1.63636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.63636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.974365 18.3691H33.28"
                  stroke="#DB5E5E"
                  stroke-width="1.63636"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
