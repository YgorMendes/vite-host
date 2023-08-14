import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// contexts
import AuthContext from "host/AuthContext";

type AuthContextTypeProviderProps = {
  children: ReactNode;
};

const AuthContextProvider = (props: AuthContextTypeProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{
    id: string;
    name: string;
  }>({
    id: "",
    name: "",
  });

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");

    if (!localStorageUser) {
      setUser({
        id: "",
        name: "",
      });
      localStorage.removeItem("user");

      if (location.pathname !== "/") {
        navigate("/");
        navigate(0);
      }

      return;
    }

    setUser(JSON.parse(localStorageUser));
  }, []);

  const signInUser = async (name: string) => {
    const id = uuidv4();
    setUser({ id, name });
    localStorage.setItem("user", JSON.stringify({ name, id }));
    navigate("/home");
  };

  const signOutUser = async () => {
    setUser({
      id: "",
      name: "",
    });
    localStorage.removeItem("user");
    navigate("/");
    navigate(0);
  };

  return (
    <AuthContext.Provider value={{ user, signInUser, signOutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
