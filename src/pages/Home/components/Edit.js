import { v4 } from "uuid";

const Edit = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  editToggled,
  setEditToggled,
  addToggled,
  setAddToggled,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: v4() }]);
    setInputText("");
  };

  const editTextSwitch = (e) => {
    setEditToggled(!editToggled);
    setAddToggled(!addToggled);
  };

  const editTextToggle = editToggled ? "show" : "hidden";
  const addEditToggle = addToggled ? "show" : "hidden";

  return (
    <div>
      <div>
        <div className={`eDitBox ${editTextToggle}`}>
          <div className="eDitTextarea">
            <input
              type="text"
              onChange={inputTextHandler}
              placeholder="想寫些什麼?"
              value={inputText}
            />
          </div>
          <div className="eDitButton">
            <button
              className="eDitAdd"
              type="submit"
              onClick={submitTodoHandler}
              disabled={inputText !== "" ? false : true}
            >
              添加
            </button>
            <button className="eDitDelete" onClick={editTextSwitch}>
              取消
            </button>
          </div>
        </div>
        <div className={`addEdit ${addEditToggle}`} onClick={editTextSwitch}>
          <i className="addIcon fas fa-folder-plus" />
          <span className="addText">添加代辦事項</span>
        </div>
      </div>
    </div>
  );
};

export default Edit;
