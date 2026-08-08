import { Link, useParams } from "react-router";
import { properties } from "../data/properties";

const PropertyNotFound = () => {
  return (
    <main className="main-content not-found">
      <h1>Propiedad no encontrada</h1>

      <p>Puede que esta propiedad ya no esté disponible</p>

      <Link to="/search">Ver otras propiedades</Link>
    </main>
  );
};

export const PorpertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find(item => item.id === Number(id))

  if(!property) {
    return < PropertyNotFound />
  };

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