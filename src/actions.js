const CREATE_TODO = 'CREATE_TODO';

// const createTodo = text => ({
//   type: CREATE_TODO,
//   payload: { text },
// });

const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo },
});

const REMOVE_TODO = 'REMOVE_TODO';

const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text },
});

const COMPLETE_TODO = 'COMPLETED_TODO';

const completeTodo = text => ({
  type: COMPLETE_TODO,
  payload: { text },
});

const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';

const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});

export {
  CREATE_TODO,
  createTodo,
  REMOVE_TODO,
  removeTodo,
  COMPLETE_TODO,
  completeTodo,
  LOAD_TODOS_IN_PROGRESS,
  loadTodosInProgress,
  LOAD_TODOS_SUCCESS,
  loadTodosSuccess,
  LOAD_TODOS_FAILURE,
  loadTodosFailure,
};
