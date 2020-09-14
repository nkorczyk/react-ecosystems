import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { completeTodo, removeTodo } from '../actions';
import { completeTodoRequest, displayAlert, loadTodos, removeTodoRequest } from './thunks';
import { getTodos, getTodosLoading } from './selectors';

import './TodoList.css';

const TodoList = ({
  todos = [{ text: 'Hello World' }],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlert,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
          onDisplayAlert={onDisplayAlert}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  // todos: state.todos,
  // isLoading: state.isLoading,
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
  // onRemovePressed: text => dispatch(removeTodo(text)),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  // onCompletedPressed: text => dispatch(completeTodo(text)),
  onCompletedPressed: id => dispatch(completeTodoRequest(id)),
  onDisplayAlert: text => dispatch(displayAlert(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
