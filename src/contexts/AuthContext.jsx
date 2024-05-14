import { createContext, useContext, useState } from "react";
import urlConfig from "../urlConfig";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [userDetails, setUserDetails] = useState({});
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  const handleLogout = async () => {
    setUserDetails({});
    const res = await fetch(urlConfig.LOGOUT_URL);
    const info = await res.json()
    console.log(info)
    localStorage.removeItem("userDetails");
  };

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
