import "./theme-toggler.styles.scss";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggler = ({ theme, setTheme }) => {
  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {theme === "dark" ? (
        <FiSun className="theme-icon" />
      ) : (
        <FiMoon className="theme-icon" />
      )}
    </>
  );
};

export default ThemeToggler;
