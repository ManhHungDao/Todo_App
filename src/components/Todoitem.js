import React, { useRef } from "react";

const Todoitem = (props) => {
  const { item, removeTodo, updateTodo, completeTodo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, item, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => {
          update(item.id, inputRef.current.value, e);
        }}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>Edit</button>
        <button onClick={() => completeTodo(item.id)}>Complete</button>
        <button onClick={() => removeTodo(item.id)}>Delete</button>
      </div>
      {item.completed && <span className="completed">Done</span>}
    </li>
  );
};

export default Todoitem;
