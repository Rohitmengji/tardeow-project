const BulkOrderSection = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-12 p-0 position-relative'>
            <img
              style={{ objectFit: "cover", width: "100%", height: "60vh" }}
              src='../assets/Group 601.jpg'
              alt='Background'
              className='w-100'
            />
            <div className='position-absolute top-50 start-50 translate-middle-y'>
              <h3
                style={{
                  color: "#714547",
                  position: "relative",
                  display: "block",
                  zIndex: 1,
                  paddingRight: "1.2rem", // Added paddingRight for responsive alignment
                }}
                className='text-center text-lg-left'
              >
                Looking for Bulk Orders?
              </h3>
              <button
                className='btn btn-success btn-sm mt-3'
                style={{
                  backgroundColor: "#456c33",
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Drop Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrderSection;
