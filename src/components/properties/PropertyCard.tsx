import type { Property } from "../../types/property";
import { useNavigate } from "react-router";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();
  
  const handlePropertyClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <article className="property-card" onClick={ handlePropertyClick }>
      <img src={property.image} alt={property.title} />
      <div className="property-card-content">
        <h4>{property.title}</h4>
        <p>{property.location}</p>
        {property.type && <p>{property.type}</p>}
        <strong>${property.price} / noche</strong>
      </div>
    </article>
  );
}
