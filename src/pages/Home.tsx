import Subscribe from "../components/Subscribe";
import ContactSection from "../components/contact/ContactSection";
import Testimonials from "../sections/Testimonials";
import OpenDoorsDifference from "../sections/OpenDoorsDifference";
import About from "../sections/About";
import Hero from "../sections/Hero";
import FeaturedEvents from "../sections/FeaturedEvents";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedEvents />
      <OpenDoorsDifference />
      <Testimonials />
      <ContactSection />
      <Subscribe />
    </>
  );
};

export default Home;
