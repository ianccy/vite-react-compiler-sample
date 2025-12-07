import UserList from "./UserList";
import "./index.css";

const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 1000000; i++) {
    users.push({ id: i, name: `User ${i}` });
  }
  return users;
};

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <UserList users={generateUsers()} />
    </div>
  );
};

export default App;
