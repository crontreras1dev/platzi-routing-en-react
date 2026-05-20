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
      <label>
        Ciudad
        <input
          type="text"
          placeholder="Santiago, Chile"
          value={value}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo
        <input type="text" placeholder="Apartamento" />
      </label>
      <label>
        Huéspedes
        <input type="number" placeholder="2" />
      </label>
      <button onClick={value ? onClear : undefined}>
        {value ? "Limpiar" : "Buscar"}
      </button>
    </section>
  );
}
