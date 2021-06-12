import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions/index";
import NotChecked from "../assets/not-checked.svg";

const TodoItem = ({ id, text, index }) => {
  const dispatch = useDispatch();

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <Draggable key={id} draggableId={"draggable-" + id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : "none",
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width:400
          }}
        >
          <div>
            <span {...provided.dragHandleProps}>
              <FontAwesomeIcon icon={faGripLines} />
            </span>
            &nbsp;&nbsp;
            <img onClick={hanldeToggle} alt="unchecked" src={NotChecked} />
          </div>
          &nbsp;&nbsp;
          <div> {text}</div>
          <hr style={{ color: "black" }}></hr>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
