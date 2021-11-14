const ThemeToggler = ({ theme, setTheme }) => {
  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <img
      src={
        theme === "dark"
          ? "../../assets/icon-sun.svg"
          : "../../assets/icon-moon.svg"
      }
      alt="theme switch"
    />
  );
};

export default ThemeToggler;
