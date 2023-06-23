import { NavLink } from "react-router-dom";

function HoneyBreadCrumb() {
  const shouldShowBreadcrumb = true; // Set this to true or false based on your condition

  if (!shouldShowBreadcrumb) {
    return null; // Return null to hide the breadcrumb
  }

  return (
    <div className='text-center justify-content-center  '>
      <nav
        style={{ "--bs-breadcrumb-divider": ">", marginTop: "6rem" }}
        aria-label='breadcrumb'
      >
        <h2 className='brown fw-bold'>Honey</h2>
        <ol className='breadcrumb justify-content-center fs-4'>
          <li className='breadcrumb-item '>
            <NavLink className={"nav-link fw-medium"} to='/'>
              Home{" > "}
            </NavLink>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            <NavLink to={"/about"} className={"fw-medium nav-link "}>
              Honey
            </NavLink>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default HoneyBreadCrumb;
