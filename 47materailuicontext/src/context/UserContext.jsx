import { createContext, useContext } from "react";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [product, setProduct] = useState([]);

    const getData = async () => {
        const response = await axios("https://new-server-87ld.vercel.app/data");

        setProduct(response.data)
    }
    useEffect(() => {
       getData()

    }, []);
    return (
        <UserContext.Provider value={product}>
            {
                children
            }
        </UserContext.Provider>
    )
}

export const productList = () => {
    return useContext(UserContext)
}