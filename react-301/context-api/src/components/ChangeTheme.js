import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ChangeTheme() {
  const data = useContext(ThemeContext);
  console.log(data);
  return (
    <div>
      <div>Active theme: {data}</div>
      <button>Change Theme</button>
    </div>
  );
}

export default ChangeTheme;
