import React from "react";

const ListItem = ({ todo, removeTodo, completedTodo }) => {
  return (
    <div
      className={todo.completed ? "todo-item complete" : "todo-item"}
      style={todo.important ? { background: "orange" } : {}}
    >
      <span className="todo-text">{todo.text}</span>
      <span className="icon">
        <button className="icon-btn" style={{ marginRight:"10px" }} onClick={() => removeTodo(todo.id)}>
          X
        </button>
        <button className="icon-btn" onClick={() => completedTodo(todo.id)}>Done</button>
      </span>
    </div>
  );
};

export default ListItem;
