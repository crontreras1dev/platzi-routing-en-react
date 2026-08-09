import { useLocation, useNavigate } from "react-router";
import { login } from "../utils/auth";

type LocationState = {
  from?: string;
};

export function LoginPage () {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState || null;
  const from = state?.from || "/profile"

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <main className="main-content">
      <h1>Iniciar Sesión</h1>

      <p>Login simulado para acceder a rutas privadas</p>

      <button 
        type="button" 
        className="btn"
        onClick={ handleLogin }
      >
        Login
      </button>
    </main>
  );
};