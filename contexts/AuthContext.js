import {
  createContext,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";
import api from "../utils/axios";
import API from "../constants/API";
import { removeToken, setToken } from "../utils/localStorage";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const login = async ({ email, password }) => {
    const token = await api.post(API.LOGIN, { email, password });
    setToken(token.data);

    const userData = await api.get(API.GET_USER);
    setUser(userData.data);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get(API.GET_USER)
      .then((data) => setUser(data.data))
      .catch((error) => {
        console.log(error);
        setUser(null);
        removeToken();
      });

    setLoading(false);
  }, []);

  const logout = () => {
    setUser(null);
    removeToken();
  };

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    const { user } = useAuth(); // replace with actual authentication check
    if (user === null) {
      router.push("/login");
      return null;
    }
    // render the authorized page
    return <Component {...props} />;
  };
  return AuthComponent;
};

export const withoutAuth = (Component) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    const { user } = useAuth();
    if (user !== null) {
      router.push("/profile");
      return null;
    }
    // render the authorized page
    return <Component {...props} />;
  };
  return AuthComponent;
};
