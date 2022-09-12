import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import Todoitem from "./Todoitem";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="addTodos">
      <input
        type="text"
        className="todo-input"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />
      <ul>
        {props.todos.map((item) => {
          <Todoitem
            item={item}
            removeTodo={props.removeTodos}
            updateTodo={props.updateTodos}
            completeTodo={props.updateTodos}
          />;
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
