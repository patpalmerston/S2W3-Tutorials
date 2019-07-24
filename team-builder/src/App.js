import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';

import './App.css';

function App() {
	const [members, setMembers] = useState([
		{
			name: 'Larry',
			email: 'larry@gmail.com',
			role: 'Full Stack'
		},
		{
			name: 'Sarah',
			email: 'sarah@gmail.com',
			role: 'Computer Science'
		}
	]);


	return (
		<div className='App'>
			{members.map((member, index) => (
				<Member
					member={member}
					index={index}
					key={index} 
				/>
			))}
			<Form members={members} setMembers={setMembers}/>
		</div>
	);
}

export default App;
