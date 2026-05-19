import { PropertyCard } from "./PropertyCard";

export function PropertyList() {
  return (
    <section className="properties-section">
      <h3>Alojamientos disponibles</h3>
      <div className="properties-grid">
        <PropertyCard
          title="Apartamento moderno"
          location="Santiago, Chile"
          price={75}
          image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
        />
        <PropertyCard
          title="Casa frente al lago"
          location="Bariloche, Argentina"
          price={120}
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        />
        <PropertyCard
          title="Loft en el centro"
          location="Bogotá, Colombia"
          price={65}
          image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
        />
      </div>
    </section>
  );
}
