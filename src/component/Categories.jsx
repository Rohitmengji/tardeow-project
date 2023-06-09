import oil from "../assets/images/Coconut-Oil_1L_advitise.jpg";
import honey from "../assets/images/Honey_1kg_advitise.jpg"
import ghee from '../assets/images/Ghee_1Ltr_advitise.jpg'

const Categories = () => {
  return (
    <div className='container py-5 '>
      <h2 className=' font-change-h text-center mt-2 mb-3 p-2 '>
        Our Prime Categories
      </h2>

      <div className='d-flex flex-row jus'>
        <div className='container  mx-2 p-0'>
          <img
            loading='lazy'
            style={{
              objectFit: "contain",
              maxWidth: "95%",
              height: "250px !important",
              borderRadius: "15%",
              // background: "transparent 0% 0% no-repeat padding-box",
            }}
            src={oil}
            alt='Oils Bottle'
            className='card-image'
          />

          <div className=' mt-3 '>
            <p
              style={{
                font: 'normal normal bold 17px "Open Sans"',
                letterSpacing: "0px",
                color: "#333333",
                textAlign: "center",
                opacity: 1,
              }}
            >
              Oils
            </p>
          </div>
        </div>

        <div className='container  mx-2 p-0'>
          <img
            loading='lazy'
            style={{
              objectFit: "contain",
              height: "250px !important",
              maxWidth: "95%",
              borderRadius: "15%",
            }}
            src={honey}
            alt='Honey'
            className='card-image'
          />
          <div className='mt-3 '>
            <p
              style={{
                textAlign: "center",
                font: 'normal normal bold 17px "Open Sans"',
                letterSpacing: "0px",
                color: "#333333",
                opacity: 1,
              }}
            >
              Honey
            </p>
          </div>
        </div>

        <div className='container mx-2 p-0'>
          <img
            loading='lazy'
            style={{
              objectFit: "contain",
              height: "250px !important",
              maxWidth: "95%",
              borderRadius: "15%",
            }}
            src={ghee}
            alt='Ghee'
            className='card-image'
          />
          <div className='mt-3  '>
            <p
              style={{
                textAlign: "center",
                font: 'normal normal bold 17px "Open Sans"',
                letterSpacing: "0px",
                color: "#333333",
                opacity: 1,
              }}
            >
              Ghee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
