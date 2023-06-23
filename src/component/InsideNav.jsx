import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/InsideNav.css";
import CarouselComponent from "./Carousel";

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
    <div className='TarOdew overflow-hidden'>
      <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light bg-color'>
        <div className='container-fluid  '>
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
                <a className='nav-link brown  fw-medium  ' href='/best-deals'>
                  BEST DEALS
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link brown' href='/oils'>
                  OILS
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/honey'>
                  HONEY
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/ghee'>
                  GHEE
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/my-account'>
                  MY ACCOUNT
                </a>
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
                <NavLink to='/cart'>
                  <img width={"19px"} src={cartIcon} alt='cart' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className='container'>
        <div className='row'>
          <div className='col-md-5   '>
            <h4 className='aligning'>
              <span className='green d-block'>ENJOY THE BENEFITS OF</span>
              <strong className='brown bold'>COLD PRESSED OILS</strong>
            </h4>
            <NavLink to='/shopnow' className='btn btn-success btn-sm mt-2'>
              Shop Now
            </NavLink>
          </div>
          <div className='col-sm-12 col-lg-8   '>
            <CarouselComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsideNav;
