import React, { useState } from 'react';
import { connect } from 'react-redux';

// import { createTodo } from '../actions';
import { addTodoRequest } from './thunks';

import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleClick = () => {
    const isDuplicateText = todos.some(({ text }) => text === inputValue);

    if (!isDuplicateText) {
      onCreatePressed(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="new-todo-button" onClick={handleClick} disabled={!inputValue}>
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  // onCreatePressed: text => dispatch(createTodo(text)),
  onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
