import { useState } from "react";
import List from "./List";

function UserList({ users }) {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((user) => user.name.includes(query));

  const handleClick = (id) => {
    console.log("click", id);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      Count is {count}.<div>----</div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      <List data={filteredUsers} onClick={handleClick} />
    </div>
  );
}

export default UserList;
