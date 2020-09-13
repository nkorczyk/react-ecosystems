import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo: { text, isCompleted }, onRemovePressed, onCompletedPressed }) => {
  const handleRemove = () => onRemovePressed(text);
  const handleComplete = () => onCompletedPressed(text);

  return (
    <div className="todo-item-container">
      <h3>{text}</h3>
      <div className="buttons-container">
        {isCompleted ? null : (
          <button className="completed-button" onClick={handleComplete}>
            Mark As Completed
          </button>
        )}
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
