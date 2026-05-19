function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>StayFinder</h1>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Encuentra tu próximo alojamiento</h2>
          <p>Explora lugares únicos para quedarte en tu próxima aventura.</p>
        </section>

        <section className="search-section">
          <input type="text" placeholder="Buscar por ciudad" />
        </section>

        <section className="properties-section">
          <h3>Alojamientos disponibles</h3>
        </section>
      </main>
    </div>
  );
}

export default App;
