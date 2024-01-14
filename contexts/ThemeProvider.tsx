import React, { createContext, useState } from "react";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider : React.FC<ThemeProviderProps> = ({children}) => {
    const [ theme, setTheme ] = useState<boolean>(true);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider