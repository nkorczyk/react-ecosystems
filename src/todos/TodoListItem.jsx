import React from 'react';
import classnames from 'classnames';

import './TodoListItem.css';

const TodoListItem = ({ todo: { text, isCompleted }, onRemovePressed, onCompletedPressed }) => {
  const handleRemove = () => onRemovePressed(text);
  const handleComplete = () => onCompletedPressed(text);

  const containerClasses = classnames('todo-item-container', {
    ['todo-item-container-completed']: isCompleted,
  });

  return (
    <div className={containerClasses}>
      <h3>{text}</h3>
      <div className="buttons-container">
        {isCompleted ? null : (
          <button className="completed-button" onClick={handleComplete}>
            Mark As Completed
          </button>
        )}
        <button className="remove-button" onClick={handleRemove} disabled={isCompleted}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
