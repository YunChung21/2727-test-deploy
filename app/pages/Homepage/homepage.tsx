import Header from "../globalComponents/Header/header";
import Hero from "../globalComponents/HomepageContent/hero";
import Contacts from "../globalComponents/HomepageContent/contacts";
import Rooms from "../globalComponents/HomepageContent/rooms";
import Plans from "../globalComponents/HomepageContent/plans";
import Innovative from "../globalComponents/HomepageContent/innovative";
import Reviews from "../globalComponents/HomepageContent/reviews";
import Dedicated from "../globalComponents/HomepageContent/dedicated";
import Footer from "../globalComponents/Footer/footer";

const HomePage = () => {
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
        black={false}
      />
      <Hero />
      <Contacts />
      <Rooms />
      <Plans />
      <Innovative />
      <Reviews />
      <Dedicated />
      <Footer />
    </>
  );
};

export default HomePage;
