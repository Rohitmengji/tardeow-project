import BulkOrderSection from "./BulkOrderSection";
import Categories from "./Categories";
import CustomerFeedback from "./CustomerFeedback";
import Footer from "./Footer";
import ImageDisplay from "./ImageDisplay";
import OilsCard from "./OilsCard";
import TarOdewNav from "./TarodewNav";
import { Container } from "react-bootstrap";

const Oils = () => {
  return (
    <div>
      <TarOdewNav />
      <Container fluid>
        <OilsCard />
        <BulkOrderSection />
        <Categories />
        <div>
          <CustomerFeedback />
        </div>
        {/* Render the ImageDisplay component */}
        <ImageDisplay />
      </Container>

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default Oils;
