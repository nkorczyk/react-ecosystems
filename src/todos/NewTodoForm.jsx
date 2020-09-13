import React, { useState } from 'react';

import './NewTodoForm.css';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }) => setInputValue(value);

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="new-todo-button">Create ToDo</button>
    </div>
  );
};

export default NewTodoForm;
