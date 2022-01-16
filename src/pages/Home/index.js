import Edit from "./components/Edit";
import List from "./components/List";
import EditHeader from "./components/EditHeader";
import Headers from "./components/Header";
import Menu from "./components/Menu";
import "./index.css";
import "./components/components.css";
import "./components/rwd.css";

import { useEffect, useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [switchToggled, setSwitchToggled] = useState(true);
  const [rwdSwitchToggled, setRwdSwitchToggled] = useState(true);
  const [addToggled, setAddToggled] = useState(true);
  const [editToggled, setEditToggled] = useState(false);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const menuToggle = switchToggled ? "close" : "open";
  const editToggle = switchToggled ? "zoomIn" : "zoomOut";
  const rwdmenuToggle = rwdSwitchToggled ? "rwdopen" : "rwdclose";

  useEffect(() => {
    getLocalTodos();
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

  return (
    <>
      <Headers
        switchToggled={switchToggled}
        setSwitchToggled={setSwitchToggled}
        setStatus={setStatus}
        setAddToggled={setAddToggled}
        setEditToggled={setEditToggled}
        setRwdSwitchToggled={setRwdSwitchToggled}
        setSwitchToggled={setSwitchToggled}
      />
      <div className="Main">
        <div className={`MenuBox ${menuToggle} ${rwdmenuToggle}`}>
          <Menu
            setSwitchToggled={setSwitchToggled}
            setStatus={setStatus}
            setAddToggled={setAddToggled}
            setEditToggled={setEditToggled}
            rwdSwitchToggled={rwdSwitchToggled}
            setRwdSwitchToggled={setRwdSwitchToggled}
          />
        </div>
        <div className={`TodoBox ${editToggle}`}>
          <div className="area">
            <EditHeader />
            <List
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
            <Edit
              todos={todos}
              setTodos={setTodos}
              inputText={inputText}
              setInputText={setInputText}
              editToggled={editToggled}
              setEditToggled={setEditToggled}
              addToggled={addToggled}
              setAddToggled={setAddToggled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
