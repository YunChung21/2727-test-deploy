"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "../../../css/section/plans.module.css";

const Plans: React.FC = () => {
  const router = useRouter();

  const navigateToPage = () => {
    router.push("./gallery");
  };
  return (
    <>
      <div className={styles.plans}>
        <div className={styles.plans__container}>
          <div className={styles.plans__block}>
            <h2 className={styles.plans__title}>plan du bureau</h2>
            <img
              src="images/plans.png"
              alt=""
              loading="lazy"
              className={styles.plans__img}
            />
            <button
              onClick={navigateToPage}
              className={`main__btn ${styles.plans__btn}`}
            >
              Voir plus de photos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
