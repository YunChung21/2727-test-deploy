"use client";
import React, { useRef, useState } from "react";
import styles from "../../../css/section/contacts.module.css";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

const Contacts: React.FC = () => {
  const [canSubmit, setCanSubmit] = useState(false);
  const refTurnstile = useRef<TurnstileInstance>(null);

  const handleSubmit = async () => {
    refTurnstile.current?.reset();
    console.log("submitted!");
  };

  return (
    <>
      <div className={styles.contacts} id="FrenchContacts">
        <div className={styles.contacts__container}>
          <div className={styles.contacts__block}>
            <h2 className={styles.contacts__title}>
              Jetez un coup d&rsquo;OEil &agrave; notre espace de coworking.
            </h2>
            <p className={styles.contacts__text}>
              Situ&eacute; au bord du canal de Lachine, au cœur de Griffintown
              et &agrave; proximit&eacute; du march&eacute; Atwater, le 2727
              Co-Working offre un espace &agrave; la fois moderne et chaleureux
              vous permettant d&rsquo;obtenir un bureau accessible 24/7 tout en
              profitant d&rsquo;une communaut&eacute; d&rsquo;entreprises
              innovantes autour de vous !
            </p>
            <form
              action="https://us-central1-intuitioninbox.cloudfunctions.net/httpFormSubmit?webhook=2727coworking"
              method="POST"
              id="contacts-form-french"
              className={styles.contacts__form}
              onSubmit={handleSubmit}
              target="_blank"
            >
              <input type="hidden" name="gtmId" value="GTM-MR8V52R" />

              <label className={styles["contacts__form-label"]}>
                <h3 className={styles["contacts__form-title"]}>
                  Nom<sup>*</sup>
                </h3>
                <input
                  type="text"
                  name="First Name"
                  className={styles["contacts__form-input"]}
                  required
                />
                <span className={styles["contacts__form-subtext"]}>Prénom</span>
              </label>
              <label className={styles["contacts__form-label"]}>
                <h3 className={styles["contacts__form-title"]}> </h3>
                <input
                  type="text"
                  name="Last Name"
                  className={styles["contacts__form-input"]}
                  required
                />
                <span className={styles["contacts__form-subtext"]}>Nom</span>
              </label>
              <label
                className={`${styles["contacts__form-label"]} ${styles.email__label}`}
              >
                <h3 className={styles["contacts__form-title"]}>
                  Email<sup>*</sup>
                </h3>
                <input
                  type="email"
                  name="Email"
                  className={styles["contacts__form-input"]}
                  required
                />
              </label>
              <label
                className={`${styles["contacts__form-label"]} ${styles.phone__label}`}
              >
                <h3 className={styles["contacts__form-title"]}>Téléphone</h3>
                <input
                  type="text"
                  name="Phone"
                  className={styles["contacts__form-input"]}
                />
                <span className={styles["contacts__form-subtext"]}>
                  (###) ### ####
                </span>
              </label>
              <label
                className={`${styles["contacts__form-label"]} ${styles.message__label}`}
              >
                <h3 className={styles["contacts__form-title"]}>
                  Message<sup>*</sup>
                </h3>
                <textarea
                  name="Message"
                  className={`${styles["contacts__form-input"]} ${styles.textarea}`}
                  required
                ></textarea>
              </label>
              <Turnstile
                id="turnstile-1"
                ref={refTurnstile}
                siteKey="0x4AAAAAAAcNj8rbgQPT0Xv1"
                onSuccess={() => setCanSubmit(true)}
              />
              <br />
              <button
                className={`main__btn ${styles.contacts__form__btn}`}
                name="bookatour"
                type="submit"
                disabled={!canSubmit}
                style={{
                  backgroundColor: canSubmit ? "#db5e5e" : "#ccc",
                  cursor: canSubmit ? "pointer" : "not-allowed",
                }}
              >
                Réserver une visite
              </button>
            </form>
          </div>
          <div className={styles.contacts__map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2797.5446454128055!2d-73.573016!3d45.478976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a78cb3fffff%3A0x5b8ba4648021eb5f!2s2727%20Saint-Patrick%20St.%20%23109%2C%20Montreal%2C%20QC%20H3K%200A8%2C%20Canada!5e0!3m2!1sen!2spl!4v1700083662626!5m2!1sen!2spl"
              width="500"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
