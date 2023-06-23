import { NavLink } from "react-router-dom";
import CarouselComponent from "./Carousel";

const InsideCarousel = () => {
  return (
    <div>
      <div className='container-fluid TarOdew'>
        <div className='row'>
          <div className='col-md-4 '>
            <h4 className='aligning'>
              <span className='green d-block'>ENJOY THE BENEFITS OF</span>
              <strong className='brown bold'>COLD PRESSED OILS</strong>
            </h4>
            <NavLink to='/shopnow' className='btn btn-success btn-sm mt-2'>
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
}

export default InsideCarousel