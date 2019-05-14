import React from 'react';

const Todo = props => {

  return ( 
    <p
      style={props.todo.completed ? { textDecoration: 'line-through' }: null}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.todo.text}
    </p>
  )
}
 
export default Todo;