import React from "react";
import styles from "../../../css/section/dedicated.module.css";

const Dedicated: React.FC = () => {
  return (
    <>
      <div className={styles.dedicated}>
        <div className={styles.dedicated__bg}>
          <img src="images/dedicated.png" alt="" loading="lazy" />
        </div>
        <div className={styles.dedicated__container}>
          <h2 className={styles.dedicated__title}>
            nous nous engageons à vous fournir
          </h2>
          <h3 className={styles.dedicated__subtitle}>
            un espace où vous pouvez vous concentrer et être productif
          </h3>
        </div>
      </div>
    </>
  );
};

export default Dedicated;
