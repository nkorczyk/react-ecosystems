const {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} = require('./actions');

// const isLoading = (state = false, action) => {
//   const { type } = action;

//   switch (type) {
//     case LOAD_TODOS_IN_PROGRESS:
//       return true;
//     case LOAD_TODOS_SUCCESS:
//       return false;
//     case LOAD_TODOS_FAILURE:
//       return false;
//     default:
//       return state;
//   }
// };

const initialState = { isLoading: false, data: [] };

// const todos = (state = [], action) => {
const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case CREATE_TODO: {
    //   const { text } = payload;
    //   const newTodo = {
    //     text,
    //     isCompleted: false,
    //   };
    //   return [...state, newTodo];
    // }

    // case CREATE_TODO: {
    //   const { todo } = payload;
    //   return [...state, todo];
    // }

    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }

    // case REMOVE_TODO: {
    //   const { text } = payload;
    //   return state.filter(todo => todo.text !== text);
    // }

    // case REMOVE_TODO: {
    //   const { todo: todoToRemove } = payload;
    //   return state.filter(todo => todo.id !== todoToRemove.id);
    // }

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== todoToRemove.id),
      };
    }

    // case COMPLETE_TODO: {
    //   const { text } = payload;
    //   return state.map(todo => {
    //     if (todo.text === text) {
    //       return { ...todo, isCompleted: true };
    //     }
    //     return todo;
    //   });
    // }

    // case COMPLETE_TODO: {
    //   const { todo: todoCompleted } = payload;
    //   return state.map(todo => {
    //     if (todo.id === todoCompleted.id) {
    //       return todoCompleted;
    //     }
    //     return todo;
    //   });
    // }

    case COMPLETE_TODO: {
      const { todo: todoCompleted } = payload;
      return {
        ...state,
        data: state.data.map(todo => {
          if (todo.id === todoCompleted.id) {
            return todoCompleted;
          }
          return todo;
        }),
      };
    }

    // case LOAD_TODOS_SUCCESS: {
    //   const { todos } = payload;
    //   return todos;
    // }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }

    // case LOAD_TODOS_IN_PROGRESS:
    // case LOAD_TODOS_FAILURE:
    // default:
    //   return state;

    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export { todos };
