import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
  state = { 
    todoInput: ''
   }

   handleChanges = e => {
    this.setState({ todoInput: e.target.value });
   }

   handleSubmit = e => {
     e.preventDefault();
     this.props.addTodo(this.state.todoInput);
     this.setState({ todoInput: ''})
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input 
        placeholder="todo..." 
        value={this.todoInput}
        onChange={this.handleChanges}
      />
      <button type="submit" onClick={this.handleSubmit}>Add Todo</button>
      {/* <button type="submit" onClick={props.clearComplete}>Clear Completed Todos</button>
      <button type="submit" onClick={props.clearTodos}>Clear All Todos</button> */}
    </form>

    );
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
  { addTodo }
)(TodoForm);