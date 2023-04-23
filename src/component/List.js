import React from 'react'
import { useState } from 'react';

const List = (props) => {

    const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim().length===0){
      alert("Please add content")
    }else{
      props.addTodo(input);
      setInput("");
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add Todo...."
      />
      <button type="submit" className="todo-button">ADD</button>
    </form>
  )
}

export default List