  const Categories = () => {
    return (
      <div>
        <h2 className='brown text-center mt-3 mb-4'>Our Prime Categories</h2>
        <div className='card-container p-4 mb-2'>
          <div className='d-flex'>
            <div className='container '>
              <img
                loading='lazy'
                style={{
                  objectFit: "contain",
                  height: "239px",
                  width: "100%",
                }}
                src='../assets/Coconut-Oil_1L_advitise.jpg'
                alt='Oils Bottle'
                className='card-image'
              />

              <div className='d-flex mt-3 justify-content-center'>
                <h5>Oils</h5>
              </div>
            </div>

            <div className='container'>
              <div className='image-container'>
                <img
                  style={{
                    objectFit: "contain",
                    height: "239px",
                    width: "100%",
                  }}
                  src='../assets/Honey_1kg_advitise.jpg'
                  alt='Honey'
                  className='card-image'
                />
              </div>
              <div className='d-flex mt-3 justify-content-center'>
                <h5>Honey</h5>
              </div>
            </div>

            <div className='container'>
              <div className='image-container'>
                <img
                  style={{
                    objectFit: "contain",
                    height: "239px",
                    width: "100%",
                  }}
                  src='../assets/Ghee_1Ltr_advitise.jpg'
                  alt='Ghee'
                  className='card-image'
                />
              </div>
              <div className='d-flex mt-3  justify-content-center'>
                <h5>Ghee</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Categories;
