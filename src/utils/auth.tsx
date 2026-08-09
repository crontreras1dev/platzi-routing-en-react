const STORAGE_KEY =  "platzi_host_auth";

export const isAuthenticated = () => {
  return localStorage.getItem(STORAGE_KEY) === "true";
};

export const login = () => {
  localStorage.setItem(STORAGE_KEY, "true");
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};