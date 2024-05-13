import { createContext, useContext, useState } from "react";


const AuthContext = createContext();


const AuthProvider = ({children})=>{
    const [userDetails,setUserDetails ] =useState({});

    const handleLogout = ()=>{
         setUserDetails({})
         localStorage.removeItem('userDetails');

         // Clear cookies
         document.cookie.split(";").forEach((c) => {
           document.cookie = c
             .replace(/^ +/, "")
             .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    })
}

    return <AuthContext.Provider  value={{userDetails,setUserDetails,handleLogout}}>
            {children}
    </AuthContext.Provider>
}

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}
export default AuthProvider;