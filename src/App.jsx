import "./App.css";
import AddTodo from "./components/AddTodo";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Login />
      <Profile />
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
