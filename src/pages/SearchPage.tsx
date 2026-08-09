import { useSearchParams } from "react-router";
import { PropertyList } from "../components/properties/PropertyList";
import { properties } from "../data/properties";
import { SearchFilters } from "../components/search/SearchFilters";

export const SearchPage = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const destination = searchParams.get("destinantion") || "";
  const type = searchParams.get("type") || "";

  const filteredProperties = properties.filter(property => {
    const matchesDestination = property.location
      .toLowerCase()
      .includes(destination.toLowerCase());
    const matchesType = type ? property.type === type: true;

    return matchesDestination && matchesType;
  });

  const handleFilterChange = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if(value) {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    };

    setSearchParams(nextParams);
  };

  return (
    <main className="main-content search">
      <SearchFilters 
        destination={destination}
        type={type}
        onChange={ handleFilterChange }
        onClear={ () => setSearchParams({}) }
      />

      <PropertyList properties={ filteredProperties }/>
    </main>
  );
};