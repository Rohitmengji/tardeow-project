// import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Footer.css";
import { useState } from "react";

const Footer = () => {
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  const [hoverState, setHoverState] = useState({
    isLocationHovered: false,
    isEmailHovered: false,
    isPhoneNumberHovered: false,
  });

  const handleHover = (key, value) => {
    setHoverState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFacebookHover = () => {
    setIsFacebookHovered(true);
  };

  const handleFacebookMouseLeave = () => {
    setIsFacebookHovered(false);
  };

  const handleTwitterHover = () => {
    setIsTwitterHovered(true);
  };

  const handleTwitterMouseLeave = () => {
    setIsTwitterHovered(false);
  };

  const handleLinkedInHover = () => {
    setIsLinkedInHovered(true);
  };

  const handleLinkedInMouseLeave = () => {
    setIsLinkedInHovered(false);
  };

  return (
    <>
      <div className='container-fluid bgcolor text-justify p-4'>
        <footer className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-5  mx-2'>
          <div className='col mb-2'>
            <NavLink to='/' className='mb-3 link-dark text-decoration-none'>
              <img src='../assets/logo.png' alt='logo' />
            </NavLink>
            <p className='brown fw-medium text-justify'>
              make sure to include the necessary for the icons dependencies in
              your project for the icons and styling to work correctly.
            </p>

            <div className='social-media d-flex justify-content-between align-items-baseline mx-3'>
              <NavLink to='https://www.facebook.com' target='_blank'>
                <img
                  src={
                    isFacebookHovered
                      ? "../assets/Icon awesome-facebook-1.png"
                      : "../assets/Icon awesome-facebook.png"
                  }
                  alt='Facebook'
                  onMouseEnter={handleFacebookHover}
                  onMouseLeave={handleFacebookMouseLeave}
                />
              </NavLink>
              <NavLink to='https://www.twitter.com' target='_blank'>
                <img
                  src={
                    isTwitterHovered
                      ? "../assets/Icon awesome-twitter-1.png"
                      : "../assets/Icon awesome-twitter.png"
                  }
                  alt='Twitter'
                  onMouseEnter={handleTwitterHover}
                  onMouseLeave={handleTwitterMouseLeave}
                />
              </NavLink>
              <NavLink to='https://www.linkedin.com' target='_blank'>
                <img
                  src={
                    isLinkedInHovered
                      ? "../assets/Icon awesome-linkedin-in-1.png"
                      : "../assets/Icon awesome-linkedin-in.png"
                  }
                  alt='LinkedIn'
                  onMouseEnter={handleLinkedInHover}
                  onMouseLeave={handleLinkedInMouseLeave}
                />
              </NavLink>
            </div>
          </div>

          <div className='row'></div>

          <div className='col'>
            <h3 className='brown fw-bold mb-3'>Useful Links</h3>
            <hr className='footer-hr' />
            <ul className='nav flex-column fw-medium d-flex'>
              <li className='nav-item mb-1  '>
                <NavLink to='/' className='nav-link p-0 greencol  '>
                  Best Deals
                </NavLink>
              </li>
              <li className='nav-item mb-2 green'>
                <NavLink to='/' className='nav-link p-0 greencol '>
                  Oils
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink to='/' className='nav-link p-0 greencol'>
                  Honey
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink to='/' className='nav-link p-0 greencol'>
                  Ghee
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='col d-flex justify-content-start '>
            <ul className='nav flex-column m-5 fw-medium'>
              <li className='nav-item mb-1'>
                <NavLink to='/' className='nav-link p-0 mt-3 greencol'>
                  My Account
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink to='/' className='nav-link p-0 greencol'>
                  ABOUT
                </NavLink>
              </li>
              <li className='nav-item mb-2'>
                <NavLink to='/' className='nav-link p-0 greencol'>
                  BLOG
                </NavLink>
              </li>

              <li className='nav-item mb-2'>
                <NavLink to='/' className='nav-link p-0 greencol'>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='col'>
            <h2 className='brown fw-bold'>Contact Us</h2>
            <hr className='footer-hr' />
            <ul className='nav flex-column col-lg-12'>
              <li className='nav-item mb-2 d-flex align-items-center justify-content-space'>
                <Link to='https://maps.google.com' className='nav-link p-0'>
                  <img
                    src={
                      hoverState.isLocationHovered
                        ? "../assets/Group 603.png"
                        : "../assets/Group 44.png"
                    }
                    alt='location'
                    onMouseEnter={() => handleHover("isLocationHovered", true)}
                    onMouseLeave={() => handleHover("isLocationHovered", false)}
                  />
                </Link>
                <span className='ps-2 pt-1 greencol fw-medium'>
                  Lorem ipsum, dolor sit amet consectetur elit
                </span>
              </li>
              <li className='d-flex mb-2 align-items-left'>
                <Link to='mailto:tarodew@gmail.com' className='nav-link p-0'>
                  <img
                    src={
                      hoverState.isEmailHovered
                        ? "../assets/Group 604.png"
                        : "../assets/Group 45.png"
                    }
                    alt='email'
                    onMouseEnter={() => handleHover("isEmailHovered", true)}
                    onMouseLeave={() => handleHover("isEmailHovered", false)}
                  />
                </Link>
                <p className='ps-2 greencol fw-medium pt-1'>
                  tarodew@gmail.com
                </p>
              </li>
              <li className='nav-item mb-2 d-flex align-items-center'>
                <Link to='tel:+911234567891' className='nav-link p-0'>
                  <img
                    src={
                      hoverState.isPhoneNumberHovered
                        ? "../assets/Group 605.png"
                        : "../assets/Group 46.png"
                    }
                    alt='phoneNumber'
                    onMouseEnter={() =>
                      handleHover("isPhoneNumberHovered", true)
                    }
                    onMouseLeave={() =>
                      handleHover("isPhoneNumberHovered", false)
                    }
                  />
                </Link>
                <p className='ps-2 pt-1 greencol fw-medium'>+91 1234567891</p>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className='text-center bg-footer p-2'>
        <p className='text-white'>
          Copyright &copy; 2023 TarOdew - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
