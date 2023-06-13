import Navbar from "./component/Navbar";
import InsideNav from "./component/InsideNav";
import PrimeCategories from "./component/Categories";
import CircleCard from "./component/CircleCard";
import ProductSlide from "./component/ProductSlide";
import BulkOrderSection from "./component/BulkOrderSection";
import CustomerFeedback from "./component/CustomerFeedback";
import ImageDisplay from "./component/ImageDisplay";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  return (
    <div className='app-container'>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Render the InsideNav component */}
      <InsideNav />

      {/* Render the PrimeCategories component */}
      <PrimeCategories />

      {/* Render the CircleCard component */}
      <CircleCard />

      {/* Render the OurFlagshipProducts component */}
      <ProductSlide />

      <BulkOrderSection />
      <CustomerFeedback />
      <ImageDisplay />
      <Footer />
    </div>
  );
};

export default App;
