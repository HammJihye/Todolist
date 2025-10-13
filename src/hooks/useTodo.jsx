import { useState, useEffect } from "react";

function useTodo(key, initialValue) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  const addTodo = (values) => {
    const newItem = {
      id: Date.now(),
      contents: values,
      isDone: false,
    };
    setTodos((prev) => [...prev, newItem]);
    alert("추가가 완료되었습니다!");
  };

  const ToggleChkbox = (_id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === _id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(updatedTodos);
  };

  const DeleteTodo = (_id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== _id);
    setTodos(deletedTodos);
    alert("삭제가 완료되었습니다!");
  };

  const UpdateTodo = (_id, values) => {
    const updateTodos = todos.map((todo) => {
      return todo.id === Number(_id) ? { ...todo, contents: values } : todo;
    });
    setTodos(updateTodos);
    alert("수정이 완료되었습니다!");
  };

  return { todos, addTodo, ToggleChkbox, DeleteTodo, UpdateTodo };
}

export default useTodo;
