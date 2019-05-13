import { ADD_TODO } from '../actions';

const initialState = {
  todos: [
    {
      text: 'walk dog',
      completed: false
    },
    {
      text: 'feed dog',
      completed: false
    },
    {
      text: 'pet dog',
      completed: false
    }
  ]
}


export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state
      ]
    default:
      return state;
  }
};