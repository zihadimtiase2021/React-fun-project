/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { useRemoveContext } from "./RemoveContext";

export default function Tour({ id, image, info, price, name }) {
  const [readMore, setReadMore] = useState(false);
  const consumeReomveTour = useRemoveContext();
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => consumeReomveTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}
