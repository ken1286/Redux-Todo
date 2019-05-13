import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoList extends React.Component {
  
  
  render() {
  console.log(this.props.todos)
  return (
    <div>
      {this.props.todos.map( todo => {
        return (
        <Todo 
          todo={todo.text}
          key={todo.text}
        />
        )
      })}
    </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  console.log(state.todos)
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  {}
)(TodoList);