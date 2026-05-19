import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { PropertyList } from "./components/PropertyList";
import { properties } from "./data/properties";

function App() {
  const [search, setSearch] = useState("");
  const [propertyList, setPropertyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        setPropertyList(properties);
      } catch {
        setError("No pudimos cargar las propiedades.");
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const filteredProperties = propertyList.filter((property) => {
    const searchText = search.toLowerCase();

    return (
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.type.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <h2>Encuentra tu próximo alojamiento</h2>
          <p>Explora lugares únicos para quedarte en tu próxima aventura.</p>
        </section>

        <SearchBar
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />

        {isLoading && <p>Cargando propiedades...</p>}

        {error && <p>{error}</p>}

        {!isLoading && !error && (
          <PropertyList properties={filteredProperties} />
        )}
      </main>
    </div>
  );
}

export default App;
