import React from "react";
import styles from "../../../css/section/innovate.module.css";
import Image from "next/image";

const Innovative: React.FC = () => {
  return (
    <>
      <div className={styles.innovative} id="photo">
        <div className={styles.innovative__container}>
          <h3 className={styles.innovative__subtitle}>
            2727 co-working offers
          </h3>
          <h2 className={styles.innovative__title}>innovative amenities</h2>
          <div className={styles.innovative__block}>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/1.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon1.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                Access <strong>24/7.</strong>
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/2.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon2.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Conference Room</strong> (Free Access)
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/3.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon3.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                In front of the <strong>Canal Lachine Park</strong>
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/4.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon4.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Fully Equipped Kitchen</strong>with Coffee
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/5.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon5.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Shower</strong> Access
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/6.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon6.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Heating, Air Conditioning, Electricity</strong> included
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/7.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon7.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                <strong>Gigabit High-Speed Internet</strong>
              </h4>
            </div>
            <div className={styles.innovative__box}>
              <div className={styles["innovative__box-img"]}>
                <Image
                  src={"/images/innovate/8.jpeg"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                />
                <Image
                  src={"/images/innovate/icon8.png"}
                  alt={""}
                  loading={"lazy"}
                  width={500}
                  height={300}
                  className={styles["innovative__box-icon"]}
                />
              </div>
              <h4 className={styles["innovative__box-title"]}>
                Space <strong>Secured</strong> by Alarm System & Cameras
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovative;
