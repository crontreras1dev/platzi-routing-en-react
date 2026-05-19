export function SearchBar({ value, onChange }) {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Buscar por ciudad"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </section>
  );
}
