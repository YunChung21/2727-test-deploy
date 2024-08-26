"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "../../../css/section/plans.module.css";
import Image from "next/image";

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
            <h2 className={styles.plans__title}>plan of the office</h2>
            <Image
              src={"/images/plans.png"}
              alt={"image for the plan of the office"}
              loading={"lazy"}
              width={500}
              height={500}
              className={styles.plans__img}
            />
            <button
              onClick={navigateToPage}
              className={`main__btn ${styles.plans__btn}`}
            >
              See More Photos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
