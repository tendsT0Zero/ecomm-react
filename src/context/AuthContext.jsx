import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

//create a context for authentication
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  //we will save user data in local storage
  const [user, setUser] = useLocalStorage("user", null);

  //set user data
    const login=(userName)=>{
        setUser({
            name:userName,
            avatar:'https://i.pravatar.cc/150?img=11',
            address:'123 Badda,Dhaka,Bangladesh'
        })
    }
  //logout user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
