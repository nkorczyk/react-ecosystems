import { loadTodosFailure, loadTodosInProgress, loadTodosSuccess } from '../actions';

const displayAlert = text => () => alert(text);

const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos-delay');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export { displayAlert, loadTodos };
