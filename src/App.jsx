import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Oils from "./component/Oils";
import Honey from "./component/Honey";
import Ghee from "./component/Ghee";
import { ProductContext } from "./Store/ProductContext";
import OilsCard from "./component/OilsCard";
import ProductDetails from "./component/ProductDetails";
import MyCart from "./component/MyCart";
import { CartProvider } from "./Store/CartContext";
import BestDeals from "./component/BestDeals";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <CartProvider>
      <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
        <>
          <Navbar />
          <Routes>  
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/best-deals" element={<BestDeals />} />
            <Route path='/oils' element={<Oils />} />
            <Route path='/honey' element={<Honey />} />
            <Route path='/ghee' element={<Ghee />} />
            <Route path='/mycart' element={<MyCart />} />

            <Route path='/oilsCard' element={<OilsCard />} />
            <Route path='/productDetails' element={<ProductDetails />} />
          </Routes>
        </>
      </ProductContext.Provider>
    </CartProvider>
  );
};

export default App;
