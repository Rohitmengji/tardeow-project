import { NavLink } from "react-router-dom";
import CarouselComponent from "./Carousel";

const InsideCarousel = () => {
  const buttonStyle = {
    background: "#456D33 0% 0% no-repeat padding-box",  
    borderRadius: "5px",
    opacity: "1",
  };
  return (
    <div>
      <div className='container-fluid TarOdew'>
        <div className='row mt-2'>
          <div className='col-md-4 col-xl-4 mx-4'>
            <h3 className='aligning'>
              <span className='st-1 d-block'>ENJOY THE BENEFITS OF</span>
              <strong className='st-2'>COLD PRESSED OILS</strong>
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
