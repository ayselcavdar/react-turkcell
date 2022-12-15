import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="lights">{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
