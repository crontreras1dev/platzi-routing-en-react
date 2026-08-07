import { Link, NavLink } from "react-router";

export function Header() {
  return (
    <header className="header">
      <Link to="/">Platzi-host</Link>
      <nav>
        <NavLink to="/favorites">Favoritos</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">Perfil</NavLink>
        <NavLink to="/search">Buscar</NavLink>
      </nav>
    </header>
  );
}
