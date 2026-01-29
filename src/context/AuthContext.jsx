import React, { createContext, useContext, useEffect, useState } from "react";
import { userStored } from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const foundUser = userStored.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return { success: false };
    }

    const authUser = {
      email: foundUser.email,
      role: foundUser.role
    };

    localStorage.setItem("authUser", JSON.stringify(authUser));
    setUser(authUser);

    return { success: true, role: foundUser.role };
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
    
      value={{ user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
