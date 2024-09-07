import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({children}) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserData(response.data[0]);
    } catch (error) {
        console.error(error.message);
    }
  }
    
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )

}

export function useUserContext() {
    const userData  = useContext(UserContext);
    return userData;
}