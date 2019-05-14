import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoList extends React.Component {
  
  render() {
    console.log(this.props.todos)
    return (
      <div>
        {this.props.todos.map( todo => {
          return (
          <Todo 
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            key={todo.id}
          />
          )
        })}
      </div>
      )
    }
}
 
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);