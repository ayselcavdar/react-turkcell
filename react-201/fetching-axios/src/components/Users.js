import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Yukleniyor</div>}

      <ul>
        {users.map((user, id) => (
          <li key={id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
