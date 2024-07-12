import React from "react";

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#eeeeee',
        background: '#000000'
    }
}

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({children}: any) => {
    const [theme, setTheme] = React.useState(themes.light);
    const [activeTheme, setActiveTheme] = React.useState('light');
    const toggleTheme = () => {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        setTheme(themes[newTheme]);
        setActiveTheme(newTheme);
    };

    return <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
    </ThemeContext.Provider>
}