import { Link, NavLink, useNavigate } from "react-router";
import { isAuthenticated, logout } from "../../utils/auth";

export function Header() {
  const navigate = useNavigate();

  function handleLogout () {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/">Platzi-host</Link>
      <nav>
        <NavLink to="/favorites">Favoritos</NavLink>
        <NavLink to="/search">Busqueda</NavLink>
        <NavLink to="/profile">Perfil</NavLink>
        
        {
          isAuthenticated() ? (
            <button onClick={ handleLogout }>Logout</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )
        }
      </nav>
    </header>
  );
}
