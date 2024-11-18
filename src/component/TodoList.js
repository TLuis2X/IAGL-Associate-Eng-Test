import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Todo from "./Todo";
import { fetchTodos } from "../actions";

function TodoList() {
  const dispatch = useDispatch();
  
  const { data, isLoadingData } = useSelector(state => ({
    data: state.data || {},
    isLoadingData: state.isLoadingData || false
  }));

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todos = data.todos || [];

  return (
    <ul className="todo-list">
      {isLoadingData ? (<p>Loading...</p>) : todos.length ? (
        todos.map((todo, index) => (

          <Todo key={`todo-${index}`} todo={todo} />

        ))
      ) : (
        "No todos, yay!"
      )}
    </ul>
  );
}

export default TodoList;