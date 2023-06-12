import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className='navbar-container'>
        
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
      </div>
    </nav>
  );
};

export default Navbar;
