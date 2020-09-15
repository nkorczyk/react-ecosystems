import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

// import './TodoListItem.css';

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  ${'' /* border-bottom: ${props => new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5) ? 'none' : '5px solid red'}; */}
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

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 86400000 * 5) ? 'none' : '5px solid red';

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${props => getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
  margin-right: 12px;
`;

const TodoListItem = ({
  todo: { id, text, isCompleted, createdAt },
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

  const Container = isCompleted ? TodoItemContainerWithWarning : TodoItemContainer;

  return (
    // <div className={containerClasses}>
    <Container isCompleted={isCompleted} createdAt={createdAt}>
      <h3>{text}</h3>
      {/* <div className="buttons-container"> */}
      <p>
        Created at:&nbsp;
        {new Date(createdAt).toLocaleDateString()}
      </p>
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
    </Container>
    // </div>
  );
};

export default TodoListItem;
