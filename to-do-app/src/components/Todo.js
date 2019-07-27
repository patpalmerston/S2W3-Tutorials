import React, {useEffect} from 'react'

const Todo = (props) => {
  const { todo, id, completeTodo, isCompleted, removeTodo } = props


return(
  <div 
  className="todo"
  style={{ textDecoration: isCompleted ? 'line-through' : ''}}
  >
    <p>{todo}</p>
    <div>
      <button onClick={() => completeTodo(id)}>Complete</button>
    </div>
  </div>
)
}

export default Todo;