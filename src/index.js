import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/index";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompletedTodos from "./components/CompletedTodoList";

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <h3>Tasks</h3>
          {/* <h1 className="text-capitalize text-center">Kelvin Todo List</h1> */}
          <TodoInput />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 25
            }}
          >
            <div className="grids">
              <TodoList />
            </div>
            <div className="grids">
              <CompletedTodos />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
