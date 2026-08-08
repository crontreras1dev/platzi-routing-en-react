import { Link, useParams } from "react-router";
import { properties } from "../data/properties";

export const PorpertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find(item => item.id === Number(id))

  return (
    <main className="main-content property-detail">
      <div className="property-detail-image">
        <img src={ property?.image } alt={ property?.title } />

        <span>{ property?.type }</span>
      </div>

      <section className="property-detail-content">
        <p className="eyebrow">Alojamiento Destacado</p>

        <h1>{ property?.title }</h1>

        <p className="property-detail-location">{ property?.location }</p>

        <div className="property-detail-booking">
          <strong>${ property?.price } / Noche</strong>

          <Link to={`/booking/${property?.id}`}>Reserva Ahora</Link>
        </div>
      </section>
    </main>
  );
};