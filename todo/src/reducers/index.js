import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
  todos: []
}


export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos,
        {
          text: action.text,
          id: action.id,
          completed: false
        }]
      };
    case TOGGLE_TODO:
      return { 
        todos: state.todos.map( todo => {
        if(todo.id === action.payload) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo;
      }) }
    case DELETE_TODO:
      return {
        todos: state.todos.filter( todo => {
          return todo.id !== action.payload
        })
      }
    default:
      return state;
  }
};