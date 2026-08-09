export const isAuthenticated = () => {
  return localStorage.getItem("platzi_host_auth") === "true";
};