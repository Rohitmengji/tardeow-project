
const BulkOrderSection = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className='container-fluid p-0'>
        <div className='row'>
          <div className='col-12 p-0 position-relative'>
            <img
              height={"370px"}
              style={{ objectFit: "cover" }}
              src='../../public/assets/Group 601.png'
              alt='Background'
              className='w-100'
            />
            <div className='position-absolute top-50 start-50 translate-middle-y'>
              <h2
                style={{
                  color: "#714547",
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem", // Added paddingRight for responsive alignment
                }}
                className='text-center text-lg-left'
              >
                Looking for Bulk Orders?
              </h2>
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
