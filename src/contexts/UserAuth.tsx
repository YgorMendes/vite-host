import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  name: string;
  email: string;
  token: string;
}

interface IUserProvider {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
  isAuthenticated: () => boolean;
  logout: () => void;
}

interface IContext {
  children: JSX.Element[] | JSX.Element;
}

export const UserContext = createContext<IUserProvider | undefined>(undefined);

export const UserProvider = ({ children }: IContext) => {
  const [user, setUser] = useState<IUser | undefined>();
  const navigate = useNavigate();

  const userStorage = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      if (userStorage) {
        const userParse = JSON.parse(userStorage);
        setUser(userParse);
      }
    }
  }, [userStorage, user]);

  function isAuthenticated() {
    const userStorage = localStorage.getItem("user");
    console.log(userStorage);

    if (userStorage) {
      const userParse = JSON.parse(userStorage);
      if (userParse?.name === "admin" || userParse?.name === "member") {
        return true;
      }
    } else {
      return false;
    }
  }

  function logout() {
    setUser(undefined);
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserProvider {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used after an UserContext.Provider");
  }

  return context;
}
