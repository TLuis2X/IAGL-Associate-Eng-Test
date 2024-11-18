import axios from "axios";
import { ADD_TODO, FETCH_TODOS, DELETE_TODO } from "./types";

// Fetch todos action creator
export function fetchTodos() {
  return function(dispatch) {
    return axios
      .get("http://localhost:9091/api/todo")
      .then(({ data }) => {
        dispatch(setTodos(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

// Set todos action to update Redux state
function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

// Add todo action creator
export function addTodo(taskText) {
  return function(dispatch) {
    return axios
      .post("http://localhost:9091/api/todo", { task: taskText })
      .then(({ data }) => {
        dispatch({
          type: ADD_TODO,
          payload: data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

// Delete todo action creator
export function deleteTodo(id) {
  return function(dispatch) {
    return axios
      .delete(`http://localhost:9091/api/todo/${id}`)  
      .then(() => {
        dispatch({
          type: DELETE_TODO,
          payload: id
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}