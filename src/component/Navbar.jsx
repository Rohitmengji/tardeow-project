import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className='navbar-container p-2'>
        <ul className='nav-links'>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/blog'>BLOG</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
        <img src={'../assets/Path1.png'} alt='Image' className='image' />
      </div>
    </nav>
  );
};

export default Navbar;
