import "./header.styles.scss";
import ThemeToggler from "../theme-toggler/ThemeToggler";

const Header = ({ theme, setTheme }) => {
  return (
    <header className="header">
      <h1>TODO</h1>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
