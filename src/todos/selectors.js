import { createSelector } from 'reselect';
// const getTodos = state => state.todos;
// const getTodosLoading = state => state.isLoading;

const getTodos = state => state.todos.data;
const getTodosLoading = state => state.todos.isLoading;

// const getIncompleteTodos = createSelector(
//     getTodos,
//     getTodosLoading,
//     (todos, isLoading) => isLoading ? [] : todos.filter(todo => !todo.isCompleted),
// );

const getIncompleteTodos = createSelector(getTodos, todos =>
  todos.filter(todo => !todo.isCompleted),
);

const getCompletedTodos = createSelector(getTodos, todos => todos.filter(todo => todo.isCompleted));

export { getTodos, getTodosLoading, getIncompleteTodos, getCompletedTodos };
