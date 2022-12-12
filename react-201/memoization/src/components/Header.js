import { memo } from "react";

function Header({ increment }) {
  console.log("Header component re-render");
  return (
    <div>
      Header
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default memo(Header);
