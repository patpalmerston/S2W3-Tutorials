import React, {useEffect} from 'react'

const Todo = (props) => {
  const { todo, id, completeTodo, isCompleted, removeTodo,index } = props

  console.log('todo comp', props)


return(
  <div 
  className="todo"
  style={{ textDecoration: isCompleted ? 'line-through' : ''}}
  >
    <p>{todo}</p>
    <div>
      <button onClick={() => completeTodo(id)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  </div>
)
}

export default Todo;