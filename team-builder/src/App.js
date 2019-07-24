import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';

import './App.css';

function App() {
	const [members, setMembers] = useState([
		{
			id: 1,
			name: 'Larry',
			email: 'larry@gmail.com',
			role: 'Full Stack'
		},
		{
			id: 2,
			name: 'Sarah',
			email: 'sarah@gmail.com',
			role: 'Computer Science'
		}
	]);

	const deleteMember = id => {
		setMembers(members.filter(member => member.id !== id))
	}

	


	return (
		<div className='App'>
			{members.map((member, index) => (
				<Member
					member={member}
					index={index}
					key={member.id}
					deleteMember={deleteMember} 
				/>
			))}
			<Form members={members} setMembers={setMembers}/>
		</div>
	);
}

export default App;
