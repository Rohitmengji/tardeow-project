const Categories = () => {
  return (
    <div className='container py-5 '>
      <h2 className='brown text-center mt-2 mb-3 p-2'>Our Prime Categories</h2>
      
        <div className='d-flex flex-row'>
          <div className='container'>
            <img
              loading='lazy'
              style={{
                objectFit: "contain",
                height: "250px !important",
              }}
              src='../assets/Coconut-Oil_1L_advitise.jpg'
              alt='Oils Bottle'
              className='card-image'
            />

            <div className='d-flex mt-2 justify-content-center'>
              <h5>Oils</h5>
            </div>
          </div>

          <div className='container '>
            <img
              loading='lazy'
              style={{
                objectFit: "contain",
                height: "250px !important",
              }}
              src='../assets/Honey_1kg_advitise.jpg'
              alt='Honey'
              className='card-image'
            />
            <div className='d-flex mt-2 justify-content-center'>
              <h5>Honey</h5>
            </div>
          </div>

          <div className='container'>
            <img
              loading='lazy'
              style={{
                objectFit: "contain",
                height: "250px !important",
              }}
              src='../assets/Ghee_1Ltr_advitise.jpg'
              alt='Ghee'
              className='card-image'
            />
            <div className='d-flex mt-2  justify-content-center'>
              <h5>Ghee</h5>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Categories;
