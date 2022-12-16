import { useContext } from "react";
import LangContext from "../contexts/LangContext";

function ChangeLang() {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div>
      Active Lang: {lang}
      <div>
        <button onClick={() => setLang("tr")}>TR</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ru")}>RU</button>
      </div>
    </div>
  );
}

export default ChangeLang;
