import { useState } from "react";
import { NavLink } from "react-router-dom";
import InsideCarousel from "./InsideCarousel";
import Categories from "./Categories";
import CircleCard from "./CircleCard";
import ProductSlide from "./FlagshipProduct";
import BulkOrderSection from "./BulkOrderSection";
import CustomerFeedback from "./CustomerFeedback";
import ImageDisplay from "./ImageDisplay";
import Footer from "./Footer";
import search from "../assets/images/top-ios-search.png";
import user from "../assets/images/top-user.png";
import cart from "../assets/images/top-shopping-cart.png";
// for hover image
import blackSearch from "../assets/images/ionic-ios-search-1.png";
import blackUser from "../assets/images/user.png";
import blackCart from "../assets/images/Icon feather-shopping-cart-1.png";
import logo from "../assets/images/logo.png";
import "../styles/InsideNav.css";

function InsideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchIcon, setSearchIcon] = useState(search);
  const [userIcon, setUserIcon] = useState(user);
  const [cartIcon, setCartIcon] = useState(cart);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setSearchIcon(blackSearch);
      setUserIcon(blackUser);
      setCartIcon(blackCart);
    } else {
      setSearchIcon(search);
      setUserIcon(user);
      setCartIcon(cart);
    }
  };

  return (
    <>
      <div className=' TarOdew overflow-hidden'>
        <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light bg-color '>
          <div className='container p-2'>
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
