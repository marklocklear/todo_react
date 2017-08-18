import React, { Component } from 'react';

class TodoInput extends React.Component {
  
  constructor (props) {
     super(props);
     this.state = {item: ''};
  }
  
  onChange = (e) => {
    this.setState({item: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item);
    this.setState({item: ''}, function() {
      this.refs.item.focus();
    });
  }

 render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.item} ref="item" />
        <input type="submit" value="Add"/>
      </form>
    );
  }
};
  
export default TodoInput;