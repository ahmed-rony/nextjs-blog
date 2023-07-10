"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [mode, setMode] = useState("dark");
    const toggle = () => {
        setMode(prev => (prev === "dark" ? "light" : "dark"))
    }
    return (
        <ThemeContext.Provider value={{mode, toggle}}>
            <div className={`theme ${mode}`}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};
