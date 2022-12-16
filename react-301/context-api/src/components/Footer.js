import { useLang } from "../contexts/LangContext";
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();
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
