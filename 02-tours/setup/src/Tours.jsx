/* eslint-disable react/prop-types */
import Tour from "./Tour";

export default function Tours({ tours }) {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => (
          <Tour key={tour.id} {...tour}></Tour>
        ))}
      </div>
    </section>
  );
}
