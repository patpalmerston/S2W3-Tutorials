import React from 'react';


const TodoForm = ({handleSubmit, value, setValue}) => {
  
  return(
    <form className="todo" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default TodoForm;