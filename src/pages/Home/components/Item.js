const Item = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="item">
      <span className={`listText ${todo.completed ? "completed" : ""}`}>
        {text}
      </span>
      <button className="checkBtn" type="checkbox" onClick={completeHandler}>
        <i className="checkIcon far fa-check-square"></i>
      </button>
      <button className="deleteBtn" onClick={deleteHandler}>
        <i className="deleteIcon far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Item;
