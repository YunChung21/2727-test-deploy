import React from "react";
import styles from "../../../css/section/dedicated.module.css";
import Image from "next/image";
const Dedicated: React.FC = () => {
  return (
    <>
      <div className={styles.dedicated}>
        <div className={styles.dedicated__bg}>
          <Image
            src={"/images/dedicated.png"}
            alt={"dedicated background"}
            loading={"lazy"}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.dedicated__container}>
          <h2 className={styles.dedicated__title}>
            we are dedicated to providing you
          </h2>
          <h3 className={styles.dedicated__subtitle}>
            with a space where you can focus and be productive
          </h3>
        </div>
      </div>
    </>
  );
};

export default Dedicated;
