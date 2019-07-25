import React, { useState, useEffect } from 'react'

const EditMemberForm = props => {
  
  const [member, setMember] = useState(props.currentMember)
  console.log('edit member form ', member)

  useEffect(() => {
    setMember(props.currentMember)
  }, [props])

  const handleInputChange = event => {
    const { name, value } = event.target

    setMember({...member, [name]: value})
  }
  console.log('edit', member)
  return(
    <form 
      onSubmit={event => {
          event.preventDefault()

          props.updateMember(member.id, member)
      }}
    >
      <label>Name</label>
      <input type="text" name='name' value={member.name} onChange={handleInputChange} />
      
      <label>Email</label>
      <input type="text" name='email' value={member.email} onChange={handleInputChange} />
      
      <label>Role</label>
      <input type="text" name='role' value={member.role} onChange={handleInputChange} />

      <button onClick={() => props.setEditing(false)} className='button muted-button'>
        Cancel
      </button>
      </form>


  )



}

export default EditMemberForm;