import React from "react";
import styles from "../../../css/section/innovate.module.css";

const Innovative: React.FC = () => {
  return (
    <>
      <div className={styles.innovative} id="photo">
        <div className={styles.innovative__container}>
          <h3 className={styles.innovative__subtitle}>2727 co-working offre</h3>
          <h2 className={styles.innovative__title}>
            des équipements innovants
          </h2>
          <div className={styles.innovative__block}>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/1.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon1.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                Accès <strong>24/7.</strong>
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/2.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon2.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Salle de conférence</strong> (accès gratuit)
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/3.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon3.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                En face du <strong>parc du Canal Lachine</strong>
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/4.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon4.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Cuisine entièrement équipée avec</strong>café
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/5.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon5.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Accès aux</strong> douches
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/6.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon6.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Chauffage, climatisation, électricité</strong> incluse
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/7.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon7.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Internet haut débit Gigabit</strong>
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <img src="images/innovate/8.jpeg" alt="" loading="lazy" />
                <img
                  src="images/innovate/icon8.png"
                  alt=""
                  loading="lazy"
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                Espace <strong>sécurisé</strong> par système d'alarme et caméras
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovative;
