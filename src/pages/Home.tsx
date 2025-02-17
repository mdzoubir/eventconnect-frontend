import Subscribe from "../sections/Subscribe";
import Contact from "../sections/Contact";
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
      <Contact />
      <Subscribe />
    </>
  );
};

export default Home;
