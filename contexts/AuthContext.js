import{ createContext, useState } from 'react';
import api from "../utils/axios";
import API from "../constants/API";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async({email, password}) => {

    const user = await api.post(API.LOGIN, {email, password});
    console.log(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
