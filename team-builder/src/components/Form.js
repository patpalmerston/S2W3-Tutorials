import React from 'react';

function Form({member}) {
	return (
		<div className='form'>
			<form>
				<label>
          <input 
            type='text' 
            name='name' 
            value={member.name} 
            placeholder='name' 
          />
				</label>

				<label>
          <input 
            type='text' 
            name='email' 
            value={member.email} 
            placeholder='email' 
          />
				</label>

				<label>
          <input 
            type='text' 
            name='role' 
            value={member.role} 
            placeholder='role' 
          />
				</label>
			</form>
		</div>
	);
}

export default Form;
