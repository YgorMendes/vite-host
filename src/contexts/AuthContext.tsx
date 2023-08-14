import React, { createContext } from "react";

type AuthContextType = {
  user: {
    id: string;
    name: string;
  };
  signInUser: (name: string) => Promise<void>;
  signOutUser: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;
