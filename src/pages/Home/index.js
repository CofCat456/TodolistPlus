import Edit from "./components/Edit";
import List from "./components/List";
import EditHeader from "./components/EditHeader";
import Headers from "./components/Header";
import "./index.css";
import "./components/components.css";
import "./components/rwd.css";

import { useEffect, useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [switchToggled, setSwitchToggled] = useState(true);
  const [addToggled, setAddToggled] = useState(true);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [time, setTime] = useState();

  useEffect(() => {
    getLocalTodos();
    timetick();
  }, []);

  useEffect(() => {
    console.log("hey");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const timetick = () => {
    var day = new Date();
    setTime(day.toLocaleTimeString());
  };

  setInterval(timetick, 1000);

  return (
    <>
      <div className="Main">
        <div className="TodoBox">
          <div className="area">
            <div className="toparea">
              <Headers
                switchToggled={switchToggled}
                setSwitchToggled={setSwitchToggled}
                setStatus={setStatus}
                setAddToggled={setAddToggled}
                setSwitchToggled={setSwitchToggled}
              />
              <EditHeader time={time} />
            </div>
            <Edit
              todos={todos}
              setTodos={setTodos}
              inputText={inputText}
              setInputText={setInputText}
              addToggled={addToggled}
              setAddToggled={setAddToggled}
            />
            <List
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
