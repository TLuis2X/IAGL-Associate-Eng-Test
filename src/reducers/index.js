import { ADD_TODO, DELETE_TODO, FETCH_TODOS } from "../actions/types";

const initialState = {
  data: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state, 
        data: action.payload 
      };

    case ADD_TODO:
      return { 
        ...state, 
        data: [...state.data, action.payload] 
      };

    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.id != action.payload)
      };

    default:
      return state;
  }
}