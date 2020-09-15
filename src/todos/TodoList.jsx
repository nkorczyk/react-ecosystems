import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { completeTodo, removeTodo } from '../actions';
import { completeTodoRequest, displayAlert, loadTodos, removeTodoRequest } from './thunks';
import { getCompletedTodos, getIncompleteTodos, getTodos, getTodosLoading } from './selectors';

import './TodoList.css';

// const TodoList = ({
//   todos = [{ text: 'Hello World' }],
//   onRemovePressed,
//   onCompletedPressed,
//   onDisplayAlert,
//   isLoading,
//   startLoadingTodos,
// }) => {
const TodoList = ({
  incompleteTodos,
  completedTodos,
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

  const todosWrapper = todo => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onRemovePressed={onRemovePressed}
      onCompletedPressed={onCompletedPressed}
      onDisplayAlert={onDisplayAlert}
    />
  );

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompleteTodos.map(todo => todosWrapper(todo))}
      <h3>Completed:</h3>
      {completedTodos.map(todo => todosWrapper(todo))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  // todos: state.todos,
  // isLoading: state.isLoading,
  // todos: getTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
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
