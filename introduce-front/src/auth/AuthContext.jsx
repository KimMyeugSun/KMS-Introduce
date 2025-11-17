import { createContext, useState } from 'react';

const API_BASE_URL =
  `${import.meta.env.VITE_API_BASE}` || 'http://localhost:8080';

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ API_BASE_URL }}>
      {children}
    </AuthContext.Provider>
  );
}
