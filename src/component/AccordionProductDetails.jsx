import { useState } from "react";

const AccordionProductDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? "" : accordionId);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='accordion' id='accordion'>
            <div className='card'>
              <div className='card-header' id='headingOne'>
                <h2 className='mb-0'>
                  <button
                    className='btn'
                    type='button'
                    onClick={() => handleAccordionClick("description")}
                    aria-expanded={activeAccordion === "description"}
                  >
                    Description
                  </button>
                </h2>
              </div>
              <div
                id='description'
                className={`collapse ${
                  activeAccordion === "description" ? "show" : ""
                }`}
                aria-labelledby='headingOne'
                data-parent='#accordion'
              >
                <div className='card-body'>
                  This is the description content.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='accordion' id='accordion'>
            <div className='card'>
              <div className='card-header' id='headingTwo'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link'
                    type='button'
                    onClick={() => handleAccordionClick("additional-info")}
                    aria-expanded={activeAccordion === "additional-info"}
                  >
                    Additional Information
                  </button>
                </h2>
              </div>
              <div
                id='additional-info'
                className={`collapse ${
                  activeAccordion === "additional-info" ? "show" : ""
                }`}
                aria-labelledby='headingTwo'
                data-parent='#accordion'
              >
                <div className='card-body'>
                  This is the additional information content.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='accordion' id='accordion'>
            <div className='card'>
              <div className='card-header' id='headingThree'>
                <h2 className='mb-0'>
                  <button
                    className='btn btn-link'
                    type='button'
                    onClick={() => handleAccordionClick("reviews")}
                    aria-expanded={activeAccordion === "reviews"}
                  >
                    Reviews
                  </button>
                </h2>
              </div>
              <div
                id='reviews'
                className={`collapse ${
                  activeAccordion === "reviews" ? "show" : ""
                }`}
                aria-labelledby='headingThree'
                data-parent='#accordion'
              >
                <div className='card-body'>This is the reviews content.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionProductDetails;