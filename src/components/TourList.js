import { useState } from "react";
const TourList = (props) => {
  const [readmore, setReadmore] = useState(true);
  const readmorefn = (id) => {
    setReadmore(!readmore);
  };
  return (
    <div className="tour-container">
      {props.values.map((items) => {
        const { id, name, info, image, price } = items;
        return (
          <div className="tour-cards" key={id}>
            <img className="img" src={image} alt={name} />
            <div className="tour-name-container">
              <h4>{name}</h4>
              <span>{price}</span>
            </div>
            <p>
              {readmore ? `${info.substring(0, 200)}...` : info}
              <button className="readmore" onClick={() => readmorefn(id)}>
                {readmore ? "readmore" : "showless"}
              </button>
            </p>

            <div className="btn-container">
              <button onClick={() => props.removeCard(id)}>
                Not Interested
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TourList;
