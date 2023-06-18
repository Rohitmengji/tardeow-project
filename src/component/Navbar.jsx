import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const navLinks = [
  { path: "/about", name: "ABOUT" },
  { path: "/blog", name: "BLOG" },
  { path: "/contact", name: "CONTACT" },
];

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-container'>
        <ul className='nav-links p-2'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <img src={"../assets/Path1.png"} alt='Image' className='image' />
      </div>
    </nav>
  );
};

export default Navbar;
