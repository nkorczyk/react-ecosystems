import React from 'react';
import { connect } from 'react-redux';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { completeTodo, removeTodo } from '../actions';
import { displayAlert } from './thunks';

import './TodoList.css';

const TodoList = ({
  todos = [{ text: 'Hello World' }],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlert,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
        onDisplayAlert={onDisplayAlert}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(completeTodo(text)),
  onDisplayAlert: text => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
