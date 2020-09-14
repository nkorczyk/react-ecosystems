// const getTodos = state => state.todos;
// const getTodosLoading = state => state.isLoading;

const getTodos = state => state.todos.data;
const getTodosLoading = state => state.todos.isLoading;

export { getTodos, getTodosLoading };
