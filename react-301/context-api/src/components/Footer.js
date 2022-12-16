import { useContext } from "react";
import LangContext from "../contexts/LangContext";
import ThemeContext from "../contexts/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div>
      <hr />
      Footer
      <div>Active Theme: {theme}</div>
      <div>Active Language: {lang}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Footer;
