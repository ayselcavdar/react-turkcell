import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: users } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        const { data: posts } = await axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
        );
        setLoading(false);
        setUsers(users);
        setPosts(posts);
        console.log("users", users);
        console.log("posts", posts);
      } catch (error) {
        console.log("error", error);
      }
    })();

    const getData = async () => {};
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

      <h2>Posts</h2>
      <ul>
        {posts.map((post, id) => (
          <li key={id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
