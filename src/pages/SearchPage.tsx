import { useSearchParams } from "react-router";
import { PropertyList } from "../components/properties/PropertyList";
import { properties } from "../data/properties";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const destination = searchParams.get("destinantion") || "";
  const type = searchParams.get("type") || "";

  const filteredProperties = properties.filter(property => {
    const matchesDestination = property.location.toLowerCase().includes(destination.toLocaleLowerCase());
    const matchesType = type ? property.type === type: true;

    return matchesDestination && matchesType;
  });

  return (
    <>
      <main className="main-content search">
        <h1>Resultados de busqueda</h1>

        <p>Destiono: { destination || "Todos" }</p>

        <p>Tipo: { type || "Todos" }</p>

        <PropertyList properties={ filteredProperties }/>
      </main>
    </>
  );
};