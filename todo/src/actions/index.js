export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

let nextTodoId = 0;

export const addTodo = todo => (
  {
    type: ADD_TODO,
    id: nextTodoId++,
    text: todo
  })

export const toggleTodo = id => (
  {
    type: TOGGLE_TODO,
    payload: id
  })

export const deleteTodo = id => (
  {
    type: DELETE_TODO,
    payload: id
  })