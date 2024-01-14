import React, { createContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider : React.FC<ThemeProviderProps> = ({children}) => {
    const localStoredThemeString : string | null = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const localStoredThemeBoolean : boolean = localStoredThemeString === null ? true : localStoredThemeString === 'true';
    const [ theme, setTheme ] = useState<boolean>(localStoredThemeBoolean);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;