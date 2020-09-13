const CREATE_TODO = 'CREATE_TODO';

const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text },
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

export { CREATE_TODO, createTodo, REMOVE_TODO, removeTodo, COMPLETE_TODO, completeTodo };
