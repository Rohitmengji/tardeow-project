import {NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='navbar-container'>
          <ul className='nav-links p-2'>
            <li>
              <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>BLOG</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>CONTACT</NavLink>
            </li>
          </ul>
          <img src='../assets/Path1.png' alt='Image' className='image' />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
