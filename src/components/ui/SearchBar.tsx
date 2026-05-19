export function SearchBar({ value, onChange, onClear }) {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Buscar por ciudad, tipo o alojamiento"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && <button onClick={onClear}>Limpiar</button>}
    </section>
  );
}
