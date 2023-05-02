import React, { useState, useEffect } from "react";

const Context = React.createContext({});



function ContextProvider({children}) {

    const [digimons, setDigimons] = useState([]);

    useEffect(() => {
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then(response => response.json())
            .then(data => setDigimons(data))
    }, []);

    return (
        <Context.Provider value={{digimons}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context};