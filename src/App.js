import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import useTodo from "./hooks/useTodo";
import Home from "./pages/Home";
import Todolist from "./pages/Todolist";
import TodoWrite from "./pages/TodoWrite";
import "./styles.css";

export default function App() {
  const { todos, addTodo, ToggleChkbox, DeleteTodo, UpdateTodo } = useTodo(
    "todolist",
    ""
  );
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <h1 className="title-Text">MY TO DO LIST</h1>
          <nav>
            <ul className="header-nav">
              <li>
                <NavLink to="/" end>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/Todolist" end>
                  목록보기
                </NavLink>
              </li>
              <li>
                <NavLink to="/TodoWrite">작성하기</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Todolist"
            element={
              <Todolist
                todos={todos}
                ToggleChkbox={ToggleChkbox}
                DeleteTodo={DeleteTodo}
              />
            }
          />
          <Route
            path="/TodoWrite/:id?"
            element={
              <TodoWrite
                todos={todos}
                addTodo={addTodo}
                UpdateTodo={UpdateTodo}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
