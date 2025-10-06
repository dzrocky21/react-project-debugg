import { useEffect, useState } from "react";


const getInitialTheme = () => {
    const stored = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored === "true" || (!stored && prefersDark);
};

document.documentElement.setAttribute(
    "data-bs-theme",
    getInitialTheme() ? "dark" : "light"
);

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(getInitialTheme);
    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    }

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-bs-theme",
            darkMode ? "dark" : "light"
        );

        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <div className="text-center my-4">
            {/* <h5>Theme Toggle</h5> */}
            <button
                onClick={toggleTheme} className="btn btn-outline-primary">
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    )
}

export default ThemeToggle