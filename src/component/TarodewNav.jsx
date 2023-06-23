import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/InsideNav.css";
import AboutBreadcrumb from "./AboutBreadcrumb";
import OilsBreadcrumb from './OilsBreadCrumb'
import HoneyBreadCrumb from "./HoneyBreadCrumb";
import ProductDetailsBreadCrumb from "./ProductDetailsBreadCrumb";

function TarOdewNav() {
  const logo = "../assets/logo.png";
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
  const isAboutPage = window.location.pathname === "/about"; // Check if the current page is the "About" page
  
  const isOilspage = window.location.pathname === "/oils"; 

  const isHoneypage = window.location.pathname === "/honey"; 

  const isProductPage = window.location.pathname === "/productDetails"; 

  return (
    <div className='TarOdew fixed-image overflow-hidden'>
      <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light bg-color'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>
            <img src={logo} alt='Tarodew' />
          </NavLink>

          <button
            className={`navbar-toggler mb-1 ${isCollapsed ? "" : "collapsed"}`}
            type='button'
            onClick={handleToggle}
          >
            <span className='navbar-toggler-icon  '></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isCollapsed ? "" : "show"
            } justify-content-center`}
            id='navbarNav'
          >
            <ul className='navbar-nav d-flex flex-row fw-medium gap-2'>
              <li className='nav-item'>
                <NavLink className='nav-link brown fw-medium' to='/best-deals'>
                  BEST DEALS
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link ' to='/oils'>
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
              className={`d-flex justify-content-center nav-icons icons   ${
                isCollapsed ? "" : "show"
              }`}
            >
              <div className='search-bar  mx-2'>
                {/* Search bar component */}
                <NavLink to='/search'>
                  <img width={"19px"} src={searchIcon} alt='search' />
                </NavLink>
              </div>
              <div className='profile-logo mx-2'>
                {/* Profile logo component */}
                <NavLink>
                  <img width={"19px"} src={userIcon} alt='user' />
                </NavLink>
              </div>
              <div className='cart-logo mx-2'>
                {/* Cart logo component */}
                <NavLink to='/mycart'>
                  <img width={"19px"} src={cartIcon} alt='cart' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isAboutPage && <AboutBreadcrumb />}
      {isOilspage && <OilsBreadcrumb />}
      {isHoneypage && <HoneyBreadCrumb />}
      {isProductPage && <ProductDetailsBreadCrumb />}
    </div>
  );
}

export default TarOdewNav;
