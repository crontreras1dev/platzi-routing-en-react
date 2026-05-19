import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { PropertyList } from "./components/PropertyList";
import { properties } from "./data/properties";

function App() {
  const [search, setSearch] = useState("");
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPropertyList(properties);
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
        <PropertyList properties={filteredProperties} />
      </main>
    </div>
  );
}

export default App;
