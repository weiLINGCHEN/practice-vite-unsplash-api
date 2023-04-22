import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  const localDarkMode = localStorage.getItem("darkMode") === "true";
  console.log(prefersDarkMode);
  return localDarkMode || prefersDarkMode;
};
export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
  const [searchValue, setSearchValue] = useState("cat");

  return (
    <GlobalContext.Provider
      value={{ isDarkMode, setIsDarkMode, searchValue, setSearchValue }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalValue = () => useContext(GlobalContext);
