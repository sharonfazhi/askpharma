import { createContext, useContext, useState } from 'react';

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('ap_user')); } catch { return null; }
  });
  const [token, setToken] = useState(() => sessionStorage.getItem('ap_token'));

  const login = (userData, tok) => {
    setUser(userData);
    setToken(tok);
    sessionStorage.setItem('ap_user', JSON.stringify(userData));
    sessionStorage.setItem('ap_token', tok);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.clear();
  };

  return (
    <AuthCtx.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
