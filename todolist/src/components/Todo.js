import React from 'react'

// Functional Component
const Todo = ({ text, onRemove, id }) => {
  return (
    <div className='box level'>
      <div>{text}</div>
      <a
        className='button is-danger'
        onClick={() => {
          onRemove(id)
        }}
      >
        Remove
      </a>
    </div>
  )
}

export default Todo
