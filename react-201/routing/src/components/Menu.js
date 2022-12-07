import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
