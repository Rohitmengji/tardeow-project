const Categories = () => {
  return (
    <div>
      <h2 className='brown text-center mt-5'>Our Prime Categories</h2>
      <div className='card-container d-flex  justify-content-around mt-4 mb-4'>
        <div
          style={{ borderSize: "1px ", borderRadius: "25px" }}
          className='card col-md-4 col-lg-3  mb-3 mx-5'
        >
          <img
            style={{ objectFit: "contain", height: "300px", width: "370px" }}
            src='../assets/Coconut-Oil_1L_advitise.jpg'
            alt='Oils Bottle'
            className='card-image'
          />
          <div className='card-title text-center'>
            <strong>Oils</strong>
          </div>
        </div>

        <div
          style={{ borderSize: "1px", borderRadius: "25px" }}
          className='card col-md-4 col-lg-3 mb-3 mx-3'
        >
          <img
            style={{ objectFit: "contain", height: "300px", width: "370px" }}
            src='../assets/Honey_1kg_advitise.jpg'
            alt='Honey'
            className='card-image'
          />
          <div className='card-title text-center'>
            <strong>Honey</strong>
          </div>
        </div>

        <div
            style={{ borderSize: "1px", borderRadius: "25px" }}
          className='card col-md-4 col-lg-3 mb-3 mx-3'
        >
          <img
            style={{ objectFit: "contain", height: "300px", width: "370px" }}
            src='../assets/Ghee_1Ltr_advitise.jpg'
            alt='Ghee'
            className='card-image'
          />
          <div className='card-title text-center'>
            <strong>Ghee</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
