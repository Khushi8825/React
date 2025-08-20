import React from 'react'

function TodoList({todo, index, onChange, onToggle}) {
  return (
    <>
        <input 
            type='checkbox'
            checked = {todo.completed}
            onChange={()=> onToggle(index)}
            />
    </>
  )
}

export default TodoList