import { useState } from "react";
import "../styles/AccordionProductDetails.css";

const Tab = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className='tab-container'>
      <ul className='tab-list mb-3'>
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          DESCRIPTION
        </li>
        <li
          className={`tabs  ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          ADDITIONAL INFORMATION
        </li>
        <li
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          REVIEWS
        </li>
      </ul>
      <div className='content-container'>
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolor reprehenderit, sint perferendis culpa nihil corrupti
            laboriosam tempore blanditiis est neque in numquam beatae quaerat
            veritatis facere iure placeat quas ducimus. Placeat alias eos
            facilis eligendi a quibusdam incidunt deserunt culpa eum, commodi
            voluptatem debitis odio porro qui asperiores ut voluptas dolore
            nostrum dicta quidem modi animi quas blanditiis nulla.
          </p>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <p>
            Lorem ipsum oriosam rem corrupti odit ex minus aliquam facilis quia
            delectus harum voluptas sapiente beatae, autem mollitia saepe earum
            laborum quis, vero ullam dicta? Quos omnis velit dolor facilis
            repellat harum sapiente dolores molestiae tenetur error in quod
            quaerat repellendus commodi illum ea explicabo aliquid, nesciunt
            quisquam! Sequi, sit voluptatibus!
          </p>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <p>
            Odit similique beatae molestiae a? Ivelit dolor facilis repellat
            harum sapientn facere quam est molestias vitae? Voluptatem nulla in
            dolorem ea, expedita officia soluta hic rerum? Esse nulla suscipit
            vero nostrum quam modi labore, sunt enim voluptates natus repellat
            praesentium repellendus, quidem voluptatum facilis quis
            reprehenderit, rem nesciunt corporis? Dolorem, sequi corrupti?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
