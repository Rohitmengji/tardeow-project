import { NavLink } from "react-router-dom";

function OilsBreadCrumb() {
  const shouldShowBreadcrumb = true; // Set this to true or false based on your condition

  if (!shouldShowBreadcrumb) {
    return null; // Return null to hide the breadcrumb
  }

  return (
    <div className='justify-content-center'>
      <div
        style={{ "--bs-breadcrumb-divider": ">", marginTop: "6rem" }}
        aria-label='breadcrumb'
      >
        <div
          style={{
            transform: "translate(-60px, -45px)",
            fontFamily: "Titillium Web",
          }}
        >
          <h1
            style={{
              color: "#5F272C",
              textAlign: "center",
              fontWeight: "900 ",
              lineHeight: "1",
            }}
          >
            OILS
          </h1>
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
        </div>
      </div>
    </div>
  );
}

export default OilsBreadCrumb;
