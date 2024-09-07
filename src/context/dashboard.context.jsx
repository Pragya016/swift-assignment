import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DashboardContext = createContext();

export function DashboardContextProvider({children}) {
    const [dashboardData, setDashboardData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setDashboardData(response.data);
        setFilteredData(response.data)
    }

    return (
        <DashboardContext.Provider value={{dashboardData, filteredData, setFilteredData}}>
            {children}
        </DashboardContext.Provider>
    )
}

// custom hook to use dashboard context
export function useDashboardContext() {
    const data = useContext(DashboardContext); 
    return data;
}