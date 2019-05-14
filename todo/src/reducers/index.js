import { ADD_TODO, TOGGLE_TODO } from '../actions';

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
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      }) }
    default:
      return state;
  }
};