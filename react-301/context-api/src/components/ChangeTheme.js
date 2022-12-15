import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ChangeTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Active theme: {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default ChangeTheme;
