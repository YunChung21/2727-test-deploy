export interface ImageData {
  src: string;
  alt: string;
}

const imageGallery: ImageData[] = [];

//loading 149 images from gallery
for (let i = 1; i <= 149; i++) {
  const image = require(`../../public/images/gallery/${i}.jpeg`);
  imageGallery.push({ src: image.default, alt: `Image${i}` });
}

//load 150.png individually since 150.png is the only .png image in the gallery folder
const image = require(`../../public/images/gallery/150.png`);
imageGallery.push({ src: image.default, alt: `Image150` });

export { imageGallery };
