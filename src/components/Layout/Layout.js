import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../contexts/ThemeContext";
import './style.css';

function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    );
}

function LayoutNoThemeProvider({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={
                theme === "light" ? "" : "dark text-white bg-secondary"
            }
            id="MainLayout"
        >
            {children}

        </div>
    );
}

export default Layout;