import React from 'react'

const Todo = (props) => {
  const { todo } = props
return(
  <div className="todo">
    <p>{todo}</p>
  </div>
)
}

export default Todo;