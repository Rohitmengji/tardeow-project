// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/InsideNav.css";
// import Carousel from "./Carousel";

// const logo = "../assets/logo.png";

// function InsideNav() {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const handleToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className='TarOdew'>
//       <nav className='navbar navbar-expand-lg navbar-light bg-color'>
//         <div className='container'>
//           <NavLink className='navbar-brand' to='/'>
//             <img src={logo} alt='Tarodew' />
//           </NavLink>
//           <button
//             className='navbar-toggler'
//             type='button'
//             onClick={handleToggle}
//           >
//             <span className='navbar-toggler-icon'></span>
//           </button>
//           <div
//             className={`collapse navbar-collapse ${
//               isCollapsed ? "" : "show"
//             } justify-content-center`}
//             id='navbarNav'
//           >
//             <ul className='navbar-nav'>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='/best-deals'>
//                   <strong className='brown'>BEST DEALS</strong>
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='/oils'>
//                   OILS
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='/honey'>
//                   HONEY
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='/ghee'>
//                   GHEE
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='/my-account'>
//                   MY ACCOUNT
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className='search-bar mx-2'>
//             {/* Search bar component */}
//             <NavLink to='/search'>
//               <img src='../assets/Icon ionic-ios-search.png' alt='search' />
//             </NavLink>
//           </div>
//           <div className='profile-logo mx-2'>
//             {/* Profile logo component */}
//             <NavLink>
//               <img src='../assets/user.png' width={"19px"} alt='user' />
//             </NavLink>
//           </div>
//           <div className='cart-logo mx-2'>
//             {/* Cart logo component */}
//             <NavLink to='/cart'>
//               <img src='../assets/Icon feather-shopping-cart.png' alt='cart' />
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       <div className='container mt-5'>
//         <div className='row'>
//           <div className='col-md-4 col-lg-4'>
//             <div className='header '>
//               <h2>
//                 <span className='green'>ENJOY THE BENEFITS OF</span>{" "}
//                 <strong className='brown'>COLD PRESSED OILS</strong>
//               </h2>
//               <button className='btn btn-success btn-sm mt-2'>Shop Now</button>
//             </div>
//           </div>
//           <div className='col-md-8'>
//             <div className='text-right'>
//               <Carousel />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InsideNav;




import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/InsideNav.css";
import Carousel from "./Carousel";

const logo = "../assets/logo.png";

function InsideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='TarOdew'>
      <nav className='navbar navbar-expand-lg navbar-light bg-color'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            <img src={logo} alt='Tarodew' />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            onClick={handleToggle}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isCollapsed ? "" : "show"
            } justify-content-center`}
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/best-deals'>
                  <strong className='brown'>BEST DEALS</strong>
                </NavLink>
              </li>
              <li className='nav-item'>
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

          <div className='search-bar mx-2'>
            {/* Search bar component */}
            <NavLink to='/search'>
              <img src='../assets/Icon ionic-ios-search.png' alt='search' />
            </NavLink>
          </div>
          <div className='profile-logo mx-2'>
            {/* Profile logo component */}
            <NavLink>
              <img src='../assets/user.png' width={"19px"} alt='user' />
            </NavLink>
          </div>
          <div className='cart-logo mx-2'>
            {/* Cart logo component */}
            <NavLink to='/cart'>
              <img src='../assets/Icon feather-shopping-cart.png' alt='cart' />
            </NavLink>
          </div>
        </div>
      </nav>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4  aligning'>
            {" "}
            {/* Added my-3 for margin */}
            <div className='header'>
              <h2>
                <span className='green'>ENJOY THE BENEFITS OF</span>{" "}
                <strong className='brown'>COLD PRESSED OILS</strong>
              </h2>
              <button className='btn btn-success btn-sm mt-2'>Shop Now</button>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='text-right'>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsideNav;
