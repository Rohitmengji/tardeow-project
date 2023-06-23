import BulkOrderSection from "./BulkOrderSection";
import Categories from "./Categories";
import CustomerFeedback from "./CustomerFeedback";
import Footer from "./Footer";
import ImageDisplay from "./ImageDisplay";

import TarOdewNav from "./TarodewNav";

const Honey = () => {
  return (
    <div>
      <TarOdewNav />

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

export default Honey;
