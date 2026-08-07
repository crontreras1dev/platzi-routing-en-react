import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <>
      <div>LoginPage</div>
      <button onClick={ handleLogin }>Login</button>
    </>
  );
};