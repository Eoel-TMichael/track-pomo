import { createContext, useState, ReactNode } from "react";
import ThemeData from "../utils/theme/theme";

export const ThemeContext = createContext({});

export default function ThemeContextProvider({ children }) {
    const [themes, setThemes] = useState(Object.keys(ThemeData));
    const [themeData, setThemeData] = useState(ThemeData.defaultDark);

    const updateTheme = (themeName: string) => {
        setThemeData(ThemeData[themeName]);
    };

    const getTheme = (themeName: string) => ThemeData[themeName];

    return (
        <ThemeContext.Provider
            value={{
                themeData,
                themes,
                updateTheme,
                getTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
