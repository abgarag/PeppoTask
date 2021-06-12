import React from "react";

import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions/index";

import Checked from "../assets/checked.svg";

const NonDraggableTodoItem = ({ id, text, completed, index }) => {
  const dispatch = useDispatch();

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div
      style={{
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "flext-start"
      }}
    >
      <h6>
        <span onClick={hanldeToggle}>
          <img alt="checked" src={Checked} />
        </span>
        &nbsp;&nbsp;
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
      </h6>
    </div>
  );
};

export default NonDraggableTodoItem;
