import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Buscar por ciudad, tipo o alojamiento"
        value={value}
        onChange={handleChange}
      />

      {value && <button onClick={onClear}>Limpiar</button>}
    </section>
  );
}
