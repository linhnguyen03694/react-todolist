import React, { useEffect, useState } from 'react'
import List  from './component/List'
import ListItem from './component/ListItem'

const App = () => {
  
  const [todos,setTodos]=useState (
  !localStorage.getItem("todos")
  ? []
  : JSON.parse(localStorage.getItem("todos")));

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const handleDelete = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const hanldeComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='todo-list'>
    <h1>TODO LIST</h1>
    <List addTodo={addTodo}/>
    <div class="list-item">
    {todos.map((todo)=>{
      return(
        <ListItem
        key={todo.id}
        todo={todo}
        removeTodo={handleDelete}
        completedTodo={hanldeComplete}
        />
      )
    })}
    </div>
    </div>
  )
}

export default App
