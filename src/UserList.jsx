import { useState, useEffect } from "react";
import List from "./List";

function UserList({ users }) {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((user) => user.name.includes(query));

  // 2. 使用 useCallback 優化事件處理
  const handleClick = (id) => {
    console.log("click", id);
  };

  useEffect(() => {
    window.renderEnd = performance.now();
    console.log(
      `After - took: ${(window.renderEnd - window.renderStart).toFixed(2)} ms`
    );
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          window.renderStart = performance.now();
        }}
      >
        Increment Count
      </button>
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
