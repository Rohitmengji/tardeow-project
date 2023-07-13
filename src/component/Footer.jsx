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
      <div className='container-fluid bgcolor text-justify p-3'>
        <footer className='row'>
          <div className='container mb-2 col-sm-3 col-lg-4 col-md-5 p-3'>
            {/* <NavLink to='/' className='mb-3text-decoration-none'> */}
              <img
                className=' footer-logo'
                src='../assets/logo.png'
                alt='logo'
              />
            {/* </NavLink> */}
            <p
              style={{ fontSize: "14px", color: "#5F272C", }}
              className='fw-medium  mt-2'
            >
              make sure to include the necessary for the icons dependencies in
              your project for the icons and for the icons and styling to work
              correctly.
            </p>

            <div className='social-media d-flex  gap-2 pt-2  align-items-center'>
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
                  style={{ marginRight: "9px" }} // Add margin to the right
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
                  style={{ marginRight: "9px" }} // Add margin to the right
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
                  style={{ marginRight: "9px" }}
                />
              </NavLink>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div
              style={{
                fontSize: "14px",
                textAlign: "left",
                font: "normal normal normal 14px/35px",
                color: "#456D33",
              }}
            >
              <h3 className=' brown fw-bold mb-2'>Useful Links</h3>
              <hr className='footer-line' />
              <table className='greencol' cellPadding={4}>
                <thead>
                  <tr>
                    <td>
                      <NavLink to='/' className='nav-link  green'>
                        Best Deals
                      </NavLink>
                    </td>
                    <td className='col-6'>
                      <NavLink to='/' className='nav-link  greencol'>
                        My Account
                      </NavLink>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <NavLink to='/' className='nav-link p-1   greencol'>
                        Oils
                      </NavLink>
                    </td>
                    <td>
                      <NavLink to='/about' className=' nav-link p-1 greencol'>
                        ABOUT
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to='/' className='nav-link p-1 greencol'>
                        Honey
                      </NavLink>
                    </td>
                    <td>
                      <NavLink to='/blog' className=' nav-link p-1 greencol'>
                        BLOG
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink to='/' className='nav-link p-1 greencol'>
                        Ghee
                      </NavLink>
                    </td>
                    <td>
                      <NavLink to='/contact' className=' nav-link p-1 greencol'>
                        CONTACT
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ fontSize: "14px" }} className='col-sm-4 mt-4'>
            <h3 className='brown fw-bold'>Contact Us</h3>
            <hr className='footer-line' />
            <div>
              <ul className='nav flex-column mb-3'>
                <li className='nav-item mb-2 d-flex align-items-center '>
                  <Link to='https://maps.google.com' className='nav-link  p-0 '>
                    <img
                      style={{ width: "50px !important" }}
                      src={
                        hoverState.isLocationHovered
                          ? "../assets/Group 603.png"
                          : "../assets/Group 44.png"
                      }
                      alt='location'
                      onMouseEnter={() =>
                        handleHover("isLocationHovered", true)
                      }
                      onMouseLeave={() =>
                        handleHover("isLocationHovered", false)
                      }
                    />
                  </Link>
                  <span className='ps-1 fw-medium greencol '>
                    Lorem ipsum, dolor sit amet elit 
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
                  <p className='ps-1 greencol fw-medium pt-2'>
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
                  <p className='ps-1 pt-2 greencol fw-medium'>+91 1234567891</p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <div className='text-center bg-footer p-3'>
        <p
          className='text-white'
          style={{ font: "normal normal normal 12px/17px" }}
        >
          Copyright &copy; 2023 TarOdew - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
