import React, { useState } from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";

export default function TodoApp() {

  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <div className="add-todo">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter New Task"
        />
        <button onClick={handleAddTodo}>Add TODO</button>
      </div>

      <TodoList />
    </div>
  );
}