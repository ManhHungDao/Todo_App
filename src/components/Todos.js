import React, { useState } from "react";
import { connect } from "react-redux";
import Todoitem from "./Todoitem";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (!todo) {
      return;
    }
    props.addTodo({
      id: uuidv4(),
      item: todo,
      completed: false,
    });
    setTodo("");
  };
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
        value={todo}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
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
