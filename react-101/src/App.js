import User from "./components/User";
import Counter from "./components/Counter";
import Colors from "./components/Colors";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Gizle/Goster</button>

      {/* <User /> */}
      {/* <Colors /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
