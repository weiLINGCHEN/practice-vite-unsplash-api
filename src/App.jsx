import { createContext, useEffect, useState } from "react";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { useGlobalValue } from "./context";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalValue();
  const toggleMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    console.log(`isDarkMode:${isDarkMode}`);
    body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);
  return (
    <main>
      <ThemeToggle toggleMode={toggleMode} isDarkMode={isDarkMode} />
      <SearchForm isDarkMode={isDarkMode} />
      <Gallery />
    </main>
  );
};
export default App;
