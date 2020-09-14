import React from 'react';
import classnames from 'classnames';

import './TodoListItem.css';

const TodoListItem = ({
  todo: { id, text, isCompleted },
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlert,
}) => {
  // const handleRemove = () => onRemovePressed(text);
  const handleRemove = () => onRemovePressed(id);
  // const handleComplete = () => onCompletedPressed(text);
  const handleComplete = () => onCompletedPressed(id);
  const handleDisplayAlert = () => onDisplayAlert(text);

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
        <button className="alert-button" onClick={handleDisplayAlert}>
          Display Alert
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
