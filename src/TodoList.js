import React, { Component } from 'react';
import TodoItems from './TodoItems';
import TodoInput from './TodoInput';

class TodoList extends React.Component {

  static propTypes = {
    todos: React.PropTypes.array
  };

  constructor(props) {
    super(props)
    this.state = { todos: this.props.todos || [] }
  }
  
  addTodo = (item) => {
    this.setState({todos: this.state.todos.concat([item])});
  }

  render () {
    return (
      <div>
        <h3>TODO List</h3>
        <TodoItems items={this.state.todos}/>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );    
  }
};

export default TodoList;