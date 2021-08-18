import React from 'react'
import TodoApp from './component/TodoApp'
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <span className="title">Todo List</span><br />
      <TodoApp/>
    </div>
  )
}

export default App

