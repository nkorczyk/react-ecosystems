import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// import { createTodo } from '../actions';
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';

// import './NewTodoForm.css';

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

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
    // <div className="new-todo-form">
    <FormContainer>
      {/* <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={handleChange}
      /> */}
      <NewTodoInput
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={handleChange}
      />
      {/* <button className="new-todo-button" onClick={handleClick} disabled={!inputValue}>
        Create Todo
      </button> */}
      <NewTodoButton onClick={handleClick} disabled={!inputValue}>
        Create Todo
      </NewTodoButton>
    </FormContainer>
    // </div>
  );
};

const mapStateToProps = state => ({
  // todos: state.todos,
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  // onCreatePressed: text => dispatch(createTodo(text)),
  onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
