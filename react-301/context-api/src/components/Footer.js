import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <hr />
      Footer
      <div>Active Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Footer;
