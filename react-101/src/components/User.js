import { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Ice", surname: "Cavdar" });
  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}
      <br />
      <br />
      <div>
        <button onClick={() => setUser((prev) => ({ ...prev, name: "Aysel" }))}>
          Change name
        </button>
        <button onClick={() => setUser({ ...user, surname: "Misrikhanova" })}>
          Change surname
        </button>
      </div>
    </div>
  );
}

export default User;
