const BulkOrderSection = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-12 p-0 position-relative'>
            <img
              loading='lazy'
              style={{ objectFit: "cover", width: "100%", height: "336px" }}
              src='../assets/images/Group 601.jpg'
              alt='Background'
              className='w-100'
            />
            <div className='position-absolute top-50 bulk '>
              <h3
                style={{
                  textAlign: "center",
                  font: "normal normal 600 35px/47px ",
                  letterSpacing: "0px",
                  fontFamily: "Segoe UI",
                  transform: "translateY(-26%) !important",
                  color: "#5F272C",
                  opacity: 1,
                }}
              >
                Looking for Bulk Orders ?
              </h3>
              <button
                className='btn btn-success mx-1 mt-2'
                style={{
                  background: "#456D33",
                  fontFamily: "Open Sans",
                  backgroundPosition: "0% 0%",
                  width: "124px",
                  height: "45px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "padding-box",
                  borderRadius: "5px",
                  opacity: 1,
                }}
              >
                Drop a Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrderSection;
