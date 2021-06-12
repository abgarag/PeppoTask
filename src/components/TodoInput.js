import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, sortTodo } from "../redux/actions/index";
import AddBlue from "../assets/add-blue.svg";
import AddGrey from "../assets/add-gray.svg";
const TodoInput = () => {
  const [text, setText] = useState("");
  const [disabled, setdisabled] = useState(true);
  const { list } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (text !== "" && text > 20) {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  const handleSort = () => {
    list.sort((a, b) =>
      a.text.toLowerCase() < b.text.toLowerCase()
        ? -1
        : Number(a.text.toLowerCase() > b.text.toLowerCase())
    );

    dispatch(sortTodo(list));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 5
        }}
      >
        <img alt="add" src={text.length > 0 ? AddGrey : AddBlue} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a Todo"
            name="todo"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
              if (
                event.target.value.length > 20 ||
                event.target.value.length === 0
              ) {
                setdisabled(true);
              } else {
                setdisabled(false);
              }
            }}
          />
        </form>
      </div>
      <button
        type="submit"
        className={`AddTodo${!disabled ? "" : " disabled"}`}
        disabled={disabled ? true : false}
        onClick={handleSubmit}
      >
        Add
      </button>
      <button className="sortButton" onClick={handleSort}>
        Sort
      </button>
    </div>
  );
};

export default TodoInput;
