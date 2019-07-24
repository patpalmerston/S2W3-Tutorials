import React, { useState } from 'react';
import Form from './components/Form';

import './App.css';

function App() {
	const [member, setMember] = useState([
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
			<Form member={member} setMember={setMember} />
		</div>
	);
}

export default App;
