import { createContext, useState } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage('authData',{});
  const [isExpired, setIsExpired] = useState('authData',{});
  return (
    <AuthContext.Provider value={{ auth, setAuth, isExpired, setIsExpired}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;