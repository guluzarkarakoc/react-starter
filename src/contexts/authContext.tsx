import { createContext ,useContext, useState} from "react";
interface AuthState {
    isAuthenticated:boolean;
    setIsAuthenticated:any;
}

export const AuthContext= createContext<AuthState>({isAuthenticated:true,setIsAuthenticated:null});

export const useAuth = () => useContext(AuthContext)

export const AuthProvider=(props:any) => {

const [isAuthenticated,setIsAuthenticated] =useState(false)

    return <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
{props.children}
    </AuthContext.Provider>
}