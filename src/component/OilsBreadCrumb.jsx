import { NavLink } from "react-router-dom";

function  OilsBreadCrumb() {
  const shouldShowBreadcrumb = true; // Set this to true or false based on your condition

  if (!shouldShowBreadcrumb) {
    return null; // Return null to hide the breadcrumb
  }

  return (
    <div className='text-center justify-content-center  '>
      <nav
        style={{ "--bs-breadcrumb-divider": ">", marginTop: "5rem" }}
        aria-label='breadcrumb'
      >
        <h2 className='brown fw-bold'>OILS</h2>
        <ol className='breadcrumb justify-content-center fs-4'>
          <li className='breadcrumb-item '>
            <NavLink className={"nav-link fw-medium"} to='/'>
              Home{" > "}
            </NavLink>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            <NavLink to={"/oils"} className={"fw-medium nav-link "}>
              Oils
            </NavLink>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default OilsBreadCrumb;
