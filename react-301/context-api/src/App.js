import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ChangeTheme />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
