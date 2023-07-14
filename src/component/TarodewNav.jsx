import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AboutBreadcrumb from "./AboutBreadcrumb";
import OilsBreadcrumb from "./OilsBreadCrumb";
import HoneyBreadCrumb from "./HoneyBreadCrumb";
import ProductDetailsBreadCrumb from "./ProductDetailsBreadCrumb";
import { Container } from "react-bootstrap";
import "../styles/TarodewNav.css";

function TarOdewNav() {
  const logo = "../src/assets/images/logo.png";
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchIcon, setSearchIcon] = useState("../src/assets/images/top-ios-search.png");
  const [userIcon, setUserIcon] = useState("../src/assets/images/top-user.png");
  const [cartIcon, setCartIcon] = useState("../src/assets/images/top-shopping-cart.png");
  const location = useLocation();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setSearchIcon("../src/assets/images/Icon ionic-ios-search-1.png");
      setUserIcon("../src/assets/images/user.png");
      setCartIcon("../src/assets/images/Icon feather-shopping-cart-1.png");
    } else {
      setSearchIcon("../src/assets/images/top-ios-search.png");
      setUserIcon("../src/assets/images/top-user.png");
      setCartIcon("../src/assets/images/top-shopping-cart.png");
    }
  };

  const isAboutPage = location.pathname === "/about";
  const isOilspage = location.pathname === "/oils";
  const isHoneypage = location.pathname === "/honey";
  const isProductPage = location.pathname === "/productDetails";
  return (
    <div className='TarOdew  overflow-hidden'>
      <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light bg-color'>
        <Container>
          <NavLink className='navbar-brand' to='/'>
            <img src={logo} alt='Tarodew' />
          </NavLink>

          <button
            className={`navbar-toggler mb-1 ${isCollapsed ? "" : "collapsed"}`}
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
            <ul className='navbar-nav justify-content-center col-lg-8'>
              <li className='nav-item'>
                <NavLink className='nav-link brown fw-medium' to='/best-deals'>
                  BEST DEALS
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link brown' to='/oils'>
                  OILS
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/honey'>
                  HONEY
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/ghee'>
                  GHEE
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/my-account'>
                  MY ACCOUNT
                </NavLink>
              </li>
            </ul>

            <div
              className={`d-flex nav-icons justify-content-center icons ${
                isCollapsed ? "" : "show"
              }`}
            >
              <div className='search-bar mx-2 mb-1'>
                {/* Search bar component */}
                <NavLink to='/search'>
                  <img width={"19px"} src={searchIcon} alt='search' />
                </NavLink>
              </div>
              <div className='profile-logo mx-2 mb-1'>
                {/* Profile logo component */}
                <NavLink>
                  <img width={"19px"} src={userIcon} alt='user' />
                </NavLink>
              </div>
              <div className='cart-logo mx-2 mb-1'>
                {/* Cart logo component */}
                <NavLink to='/mycart'>
                  <img width={"19px"} src={cartIcon} alt='cart' />
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </nav>
      <div className='fixed-image'>
        {isAboutPage && <AboutBreadcrumb />}
        {isOilspage && <OilsBreadcrumb />}
        {isHoneypage && <HoneyBreadCrumb />}
        {isProductPage && <ProductDetailsBreadCrumb />}
      </div>
    </div>
  );
}

export default TarOdewNav;
