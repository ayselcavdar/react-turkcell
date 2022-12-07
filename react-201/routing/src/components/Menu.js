import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="menu">
        <li onClick={() => navigate(-1)}>Back</li>
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
