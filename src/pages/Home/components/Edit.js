import { v4 } from "uuid";

const Edit = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  editToggled,
}) => {
  var space = new Set();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < inputText.length; i++) {
      space.add(inputText.charAt(i));
    }
    if (space.size <= 1 && space.has(" ")) {
      alert("你只有輸入空白");
      setInputText("");
      console.log(space);
      space.clear();
    } else {
      setTodos([...todos, { text: inputText, completed: false, id: v4() }]);
      setInputText("");
      console.log(space);
      space.clear();
    }
  };

  const editTextToggle = editToggled ? "show" : "hidden";

  return (
    <div className="Area">
      <div className="inputArea">
        <div className={`eDitBox ${editTextToggle}`}>
          <input
            className="eDitInput"
            type="text"
            onChange={inputTextHandler}
            placeholder="  想寫些什麼?"
            value={inputText}
          />
          <button
            className="eDitAdd"
            type="submit"
            onClick={submitTodoHandler}
            disabled={inputText !== "" ? false : true}
          >
            加入
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
