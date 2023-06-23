import { Outlet } from "react-router-dom";

import InsideNav from "./InsideNav";

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-center">this is a homepage </h1> */}
      {/* inside nav there are nested component  */}
      <InsideNav />
      <Outlet />
    </div>
  );
};

export default Home;
