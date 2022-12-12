import { useState, useMemo } from "react";
import User from "./User";
// import Header from "./Header";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aysel");
  console.log("Counter component re-render");

  const userData = useMemo(() => {
    return {
      id: 1,
      name,
    };
  }, [name]);

  return (
    <div>
      {/* <Header count={count < 5 ? count : 5} /> */}
      <User data={userData} />
      <hr />

      <h2>{count} </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />
      <button onClick={() => setName(name === "Aysel" ? "Ice" : "Aysel")}>
        Set Name
      </button>
    </div>
  );
}

export default Counter;
