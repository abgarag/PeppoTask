import { ADD_TODO, TOGGLE_TODO, SORT_TODO } from "../actions/actions.types";

const initalState = {
  counter: 0,
  list: []
};

const todos = (state = initalState, { type, text, id, list }) => {
  switch (type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: text, completed: false }
        ]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case SORT_TODO:
      return {
        ...state,
        list: list
      };

    default:
      return state;
  }
};

export default todos;
