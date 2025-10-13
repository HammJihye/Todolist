import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TodoWrite({ todos, addTodo, UpdateTodo }) {
  const { id } = useParams();
  const [inputText, setInputText] = useState(() => {
    if (id) {
      const item = todos.find((todo) => todo.id === Number(id));
      return item ? item.contents : "";
    } else {
      return "";
    }
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      alert("할 일이 입력되지 않았습니다. 입력해주세요");
      return;
    }
    addTodo(inputText);
    setInputText("");
    navigate("/Todolist");
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    UpdateTodo(id, inputText);
    setInputText("");
    navigate("/Todolist");
  };

  return (
    <div className="main-wrapper">
      <h2 className="content-title">Write To do List</h2>
      {!id ? (
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="input todolist"
            ></input>
            <button type="submit">추가하기</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleUpdate}>
          <div className="form-wrapper">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></input>
            <button type="submit">수정하기</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default TodoWrite;
