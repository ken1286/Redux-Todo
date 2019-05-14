import React from 'react';

const Todo = props => {

  return (
    <div>
      <p
        style={props.todo.completed ? { textDecoration: 'line-through' }: null}
        onClick={() => props.toggleTodo(props.todo.id)}
      >
        {props.todo.text}
      </p>
      <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
    </div>
  )
}
 
export default Todo;