import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { sortTodo } from "../redux/actions/index";

const TodoList = () => {
  const { list } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDrag = (param) => {
    const srcI = param.source.index;
    const desI = param.destination?.index;
    if (desI) {
      list.splice(desI, 0, list.splice(srcI, 1)[0]);
      dispatch(sortTodo(list));
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={(param) => handleDrag(param)}>
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h5 align="center">Todos</h5>
              {list
                .filter((item) => !item.completed)
                .map((todo, index) => (
                  <TodoItem key={todo.id} {...todo} index={index} />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
