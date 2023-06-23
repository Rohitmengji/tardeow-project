import AboutContent from "./AboutContent";
import Categories from "./Categories";
import Footer from "./Footer";
import ImageDisplay from "./ImageDisplay";
import TarOdewNav from "./TarodewNav";

const About = () => {
  return (
    <div>
      <TarOdewNav />

      <AboutContent />

      <Categories />

      {/* Render the ImageDisplay component */}
      <ImageDisplay />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default About;
