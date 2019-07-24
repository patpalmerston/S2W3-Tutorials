import React from 'react';
import useForm from './useForm';


const Form = (props) => {
  // console.log('form', props)
 
  const { values, handleChange, handleSubmit} = useForm(logForm);

  function logForm(member) {
    // console.log(values)
    member.id = props.members.length + 1
    props.setMembers([...props.members, values])
  }

  // console.log('values', values)

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<label>Name</label> 
        <div>
          <input 
            className='input'
            type='name' 
            name='name' 
           
            placeholder='name' 
            onChange={handleChange}
          />
        </div>
				

				<label>Email</label>
        <div>
          <input 
            className='input'
            type='email' 
            name='email' 
           
            placeholder='email' 
            onChange={handleChange}
          />
        </div>
				

				<label>Role</label>
        <div>
          <input 
            className='input'
            type='role' 
            name='role' 
           
            placeholder='role' 
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
			</form>
		</div>
	);
}

export default Form;
