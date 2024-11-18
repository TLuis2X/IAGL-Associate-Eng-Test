import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

function Todo({ todo, deleteTodo }) {

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="todo-item">
      <span className='todo-item-text'>
        {todo.task}
      </span>
      <button onClick={handleDelete} className="delete-button">
        Done
      </button>
    </li>
  );
}

// export default Todo;
export default connect(null, { deleteTodo })(Todo);