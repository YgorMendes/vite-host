import React, { useContext } from "react";

// contexts
import AuthContext from "host/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
