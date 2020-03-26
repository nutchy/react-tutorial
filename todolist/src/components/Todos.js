import React, { Component } from 'react'
import Todo from './Todo'

const Todos = ({ onRemoveTodo, todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          text={todo.text}
          id={todo.id}
          key={todo.id}
          onRemove={onRemoveTodo}
        />
      ))}
    </div>
  )
}

export default Todos
