import React from "react";
import { useSelector } from "react-redux";

import NonDraggableTodoItem from "./NonDraggableTodoItem";

const CompletedTodos = () => {
  const { list } = useSelector((state) => state.todos);
  return (
    <div>
      <h5 align="center">Completed Todos</h5>

      <div>
        {list
          .filter((item) => item.completed)
          .map((todo, index) => (
            <NonDraggableTodoItem key={todo.id} {...todo} index={index} />
          ))}
      </div>
    </div>
  );
};
export default CompletedTodos;
