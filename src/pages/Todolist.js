import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Todolist({ todos, ToggleChkbox, DeleteTodo }) {
  const navigate = useNavigate();
  return (
    <div className="main-wrapper">
      <h2 className="content-title">My List</h2>
      <ul className="item-box">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => ToggleChkbox(todo.id)}
              ></input>
              <span
                style={
                  todo.isDone
                    ? { textDecorationLine: "line-through", color: "gray" }
                    : {}
                }
              >
                {todo.contents}
              </span>
              <div className="btn-wrapper">
                <button onClick={() => navigate(`/TodoWrite/${todo.id}`)}>
                  수정
                </button>
                <button onClick={() => DeleteTodo(todo.id)}>삭제</button>
              </div>
            </li>
          ))
        ) : (
          <p>할 일이 현재 없습니다. 작성해주세요</p>
        )}
      </ul>
    </div>
  );
}

export default Todolist;
