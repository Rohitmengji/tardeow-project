import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/InsideNav.css";
import CarouselComponent from "./Carousel";

const logo = "../assets/logo.png";

function InsideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='TarOdew p-5'>
      <nav className='navbar navbar-expand-lg navbar-light bg-color'>
        <div className='container col-lg-10'>
          <NavLink className='navbar-brand' to='/'>
            <img src={logo} alt='Tarodew' />
          </NavLink>

          <div
            className={`collapse navbar-collapse ${
              isCollapsed ? "" : "show"
            } justify-content-center mx-2`}
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/best-deals'>
                  <strong className='brown'>BEST DEALS</strong>
                </NavLink>
              </li>
              <li className='nav-item '>
                <NavLink className='nav-link' to='/oils'>
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
          </div>

          <div>{/* heart logo */}</div>
          <div className='d-flex '>
            <div className='search-bar mx-2 mb-1'>
              {/* Search bar component */}
              <NavLink to='/search'>
                <img src='../assets/Icon ionic-ios-search.png' alt='search' />
              </NavLink>
            </div>
            <div className='profile-logo mx-2 mb-1'>
              {/* Profile logo component */}
              <NavLink>
                <img src='../assets/user.png' width={"19px"} alt='user' />
              </NavLink>
            </div>
            <div className='cart-logo mx-2 mb-1'>
              {/* Cart logo component */}
              <NavLink to='/cart'>
                <img
                  src='../assets/Icon feather-shopping-cart.png'
                  alt='cart'
                />
              </NavLink>
            </div>
            <button
              className='navbar-toggler mb-1'
              type='button'
              onClick={handleToggle}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
        </div>
      </nav>

      <div className='container '>
        <div className='row'>
          <div className='col-md-4 col-lg-4 aligning'>
            <div className='header'>
              <h2>
                <span className='green d-block'>ENJOY THE BENEFITS OF</span>
                <strong className='brown bold'>COLD PRESSED OILS</strong>
              </h2>
              <NavLink to='/shopnow' className='btn btn-success btn-sm mt-2'>
                Shop Now
              </NavLink>
            </div>
          </div>
          <div className='col-md-8 col-lg-6 col-sm-12 '>
            {/* Carousel imported */}
            <div>
              <CarouselComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsideNav;
