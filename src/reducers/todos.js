import * as types from '../viewes/Todos/actionTypes';
import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case types.TODOS_FILTER_UPDATE:
      return {
        ...state,
        filter: action.payload,
      };
    case types.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case types.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
        todoForm: initialState.todos.todoForm,
      };
    case types.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case types.FETCH_TODO_REQUEST:
    case types.CREATE_TODO_REQUEST:
    case types.DELETE_TODO_REQUEST:
    case types.TOGGLE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_TODO_FAILURE:
    case types.CREATE_TODO_FAILURE:
    case types.DELETE_TODO_FAILURE:
    case types.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todos;
