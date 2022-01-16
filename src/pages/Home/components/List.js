import Item from "./Item";

const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      {filteredTodos.map((todo) => (
        <Item
          key={todo.id}
          text={todo.text}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default List;
