import BulkOrderSection from "./BulkOrderSection";
import Categories from "./Categories";
import CustomerFeedback from "./CustomerFeedback";
import Footer from "./Footer";
import ImageDisplay from "./ImageDisplay";
import OilsCard from "./OilsCard";

import TarOdewNav from "./TarodewNav";

const Oils = () => {
  return (
    <div>
      <TarOdewNav />
        <OilsCard/>
      <BulkOrderSection />
      <Categories />
      <div>
        <CustomerFeedback />
      </div>
      {/* Render the ImageDisplay component */}
      <ImageDisplay />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default Oils;
