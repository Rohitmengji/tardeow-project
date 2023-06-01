import Navbar from "./component/Navbar";
import InsideNav from "./component/InsideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeCategories from "./component/Categories";
import CircleCard from "./component/CircleCard";
import OurFlagshipProducts from "./component/OurFlagshipProducts";
// import Carousel from "./component/Carousel";

const App = () => {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Render the InsideNav component */}
      <InsideNav />

      {/* Render the PrimeCategories component */}
      <PrimeCategories />

      {/* Render the CircleCard component */}
      <CircleCard />

      {/* Render the OurFlagshipProducts component */}
      <OurFlagshipProducts />
    </div>
  );
};

export default App;
