/* eslint-disable react-hooks/purity */
import { useState, useEffect, useRef } from "react";
import List from "./List";

function UserList({ users }) {
  const renderStart = useRef(performance.now());
  renderStart.current = performance.now();

  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((user) => user.name.includes(query));

  // 2. 使用 useCallback 優化事件處理
  const handleClick = (id) => {
    console.log("click", id);
  };

  useEffect(() => {
    const renderEnd = performance.now();
    console.log(
      `After - took: ${(renderEnd - renderStart.current).toFixed(2)} ms`
    );
  });

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
