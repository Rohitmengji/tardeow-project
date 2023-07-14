import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/InsideNav.css";
import InsideCarousel from "./InsideCarousel";
import Categories from "./Categories";
import CircleCard from "./CircleCard";
import ProductSlide from "./FlagshipProduct";
import BulkOrderSection from "./BulkOrderSection";
import CustomerFeedback from "./CustomerFeedback";
import ImageDisplay from "./ImageDisplay";
import Footer from "./Footer";

const logo = "../assets/logo.png";

function InsideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchIcon, setSearchIcon] = useState("../assets/top-ios-search.png");
  const [userIcon, setUserIcon] = useState("../assets/top-user.png");
  const [cartIcon, setCartIcon] = useState("../assets/top-shopping-cart.png");

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setSearchIcon("../assets/Icon ionic-ios-search-1.png");
      setUserIcon("../assets/user.png");
      setCartIcon("../assets/Icon feather-shopping-cart-1.png");
    } else {
      setSearchIcon("../assets/top-ios-search.png");
      setUserIcon("../assets/top-user.png");
      setCartIcon("../assets/top-shopping-cart.png");
    }
  };

  return (
    <>
      <div className=' TarOdew overflow-hidden '>
        <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light bg-color '>
          <div className='container'>
            <NavLink className='navbar-brand' to='/'>
              <img src={logo} alt='Tarodew' />
            </NavLink>

            <button
              className={`navbar-toggler mb-1 ${
                isCollapsed ? "" : "collapsed"
              }`}
              type='button'
              onClick={handleToggle}
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                isCollapsed ? "" : "show"
              } justify-content-center mx-auto`}
              id='navbarNav'
            >
              <ul className='navbar-nav justify-content-center gap-1 col-lg-8'>
                <li className='nav-item '>
                  <NavLink className='nav-link brown  fw-bold' to='/best-deals'>
                    BEST DEALS
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link black fw-medium' to='/oils'>
                    OILS
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link black fw-medium' to='/honey'>
                    HONEY
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link black fw-medium' to='/ghee'>
                    GHEE
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link black fw-medium'
                    to='/my-account'
                  >
                    MY ACCOUNT
                  </NavLink>
                </li>
              </ul>

              <div
                className={`d-flex nav-icons justify-content-center icons ${
                  isCollapsed ? "" : "show"
                }`}
              >
                <div className='mx-3 mb-1'>
                  {/* Search bar component */}
                  <NavLink to='/search'>
                    <img width={"19px"} src={searchIcon} alt='search' />
                  </NavLink>
                </div>
                <div className=' mx-2 mb-1'>
                  {/* Profile logo component */}
                  <NavLink>
                    <img width={"19px"} src={userIcon} alt='user' />
                  </NavLink>
                </div>
                <div className=' mx-3 mb-1'>
                  {/* Cart logo component */}
                  <NavLink to='/mycart'>
                    <img width={"19px"} src={cartIcon} alt='cart' />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <InsideCarousel />
      <Categories />
      <CircleCard />
      <ProductSlide />
      <BulkOrderSection />
      <CustomerFeedback />
      <ImageDisplay />
      <Footer />
    </>
  );
}

export default InsideNav;
