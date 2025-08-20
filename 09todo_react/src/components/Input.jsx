import React from 'react'

function Input() {
    const style = {display: 'flex', justifyContent: 'center'}
  return (
    <div>
        <input type="text" placeholder="ADD TASK"/>
        <button>ADD</button>
    </div>
  )
}

export default Input