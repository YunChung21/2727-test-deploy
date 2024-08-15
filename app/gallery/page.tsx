import React from "react";
import styles from "../css/section/gallery.module.css";
import Header from "../pages/globalComponents/Header/header";
import Footer from "../pages/globalComponents/Footer/footer";
import Image from "next/image";
import { imageGallery } from "./imageData";
import type { ImageData } from "./imageData"; // Import the type

const Gallery: React.FC = () => {
  return (
    <>
      <Header
        langLink="/fr"
        langText="FR"
        galleryLink="/gallery"
        galleryText="Gallery"
        phoneLink="(438) 796-0017"
        phoneText="Call Us: (438) 796-0017"
        buttonLink="contacts"
        buttonText="Get A Quote"
        black={true}
      />
      <div className={styles.gallery}>
        <div className={styles.gallery__container}>
          <div className={styles.gallery__block} id="galleryBlock">
            {imageGallery.map((image: ImageData, index: number) => (
              <div className={styles.gallery__box} key={index}>
                <Image src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
