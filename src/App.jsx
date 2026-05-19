import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { PropertyList } from "./components/PropertyList";
import { properties } from "./data/properties";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <h2>Encuentra tu próximo alojamiento</h2>
          <p>Explora lugares únicos para quedarte en tu próxima aventura.</p>
        </section>

        <p>Búsqueda actual: {search}</p>
        <button onClick={() => setSearch("Santiago")}>Buscar Santiago</button>

        <SearchBar />
        <PropertyList properties={properties} />
      </main>
    </div>
  );
}

export default App;
