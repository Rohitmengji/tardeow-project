import { NavLink } from "react-router-dom";
import CarouselComponent from "./Carousel";

const InsideCarousel = () => {
  const buttonStyle = {
    backgroundColor: "#486a37",
    // Add other desired styles
  };
  return (
    <div>
      <div className='container-fluid TarOdew'>
        <div className='row'>
          <div className='col-md-4 mx-4'>
            <h3 className='aligning'>
              <span className='green d-block'>ENJOY THE BENEFITS OF</span>
              <strong className='brown bold'>COLD PRESSED OILS</strong>
            </h3>
            <NavLink
              to='/shopnow'
              className='btn btn-success  btn-md mt-2'
              style={buttonStyle}
            >
              Shop Now
            </NavLink>
          </div>
          <div className=' col-sm-12  col-md-6 col-lg-7  '>
            <CarouselComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCarousel;
