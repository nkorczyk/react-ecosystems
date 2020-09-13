import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo: { text }, onRemovePressed }) => {
  const handleRemove = () => onRemovePressed(text);

  return (
    <div className="todo-item-container">
      <h3>{text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark As Completed</button>
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
