import { useContext } from "react";
import { FiSun } from "react-icons/fi";

import { HiMoon } from "react-icons/hi";
const ThemeToggle = ({ toggleMode, isDarkMode }) => {
  return (
    <section className="toggle-container">
      <button type="button" onClick={toggleMode} className="dark-toggle">
        {isDarkMode ? (
          <HiMoon className="toggle-icon" />
        ) : (
          <FiSun className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
