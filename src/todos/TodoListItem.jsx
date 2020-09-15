import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

// import './TodoListItem.css';

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;

  ${({ isCompleted }) =>
    isCompleted &&
    `
  background: #fdd8d8;
  box-shadow: 0 4px 8px rgb(86, 207, 5);
  `}
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
  margin-right: 12px;
`;

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

  // const containerClasses = classnames('todo-item-container', {
  //   ['todo-item-container-completed']: isCompleted,
  // });

  return (
    // <div className={containerClasses}>
    <TodoItemContainer isCompleted={isCompleted}>
      <h3>{text}</h3>
      {/* <div className="buttons-container"> */}
      <ButtonsContainer>
        {isCompleted ? null : (
          <CompletedButton onClick={handleComplete}>Mark As Completed</CompletedButton>
        )}
        <RemoveButton onClick={handleRemove} disabled={isCompleted}>
          Remove
        </RemoveButton>
        <button className="alert-button" onClick={handleDisplayAlert}>
          Display Alert
        </button>
      </ButtonsContainer>
      {/* </div> */}
    </TodoItemContainer>
    // </div>
  );
};

export default TodoListItem;
