import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';
import EditMemberForm from './components/EditMemberForm';

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

	const [editing, setEditing] = useState(false)
	const initialMemberState = {id: null, name: '', email: '', role: '' }
	const [currentMember, setCurrentMember] = useState(initialMemberState)
	

	const editMember = member => {
		setEditing(true)
		setCurrentMember({id: member.id, name: member.name, email: member.email, role: member.role })
	}

	const updateMember = (id, updatedMember) => {
		setEditing(false)
		setMembers(members.map(member => (member.id === id ? updatedMember : member)))
	}

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
					editMember={editMember}
				/>
			))}
			{/* {editing ? (
				<div>
					<h2>Edit Member</h2>
					<EditMemberForm
						editing={editing}
						setEditing={setEditing}
						currentMember={currentMember}
						updateMember={updateMember} 
					/>
				</div>
			) : (
				<div>
					<h2>Add user</h2>
					<Form members={members} setMembers={setMembers}/>
				</div>
			)} */}
			<div>
					<h2>Edit Member</h2>
					<EditMemberForm
						editing={editing}
						setEditing={setEditing}
						currentMember={currentMember}
						updateMember={updateMember} 
					/>
				</div>
				<div>
					<h2>Add user</h2>
					<Form members={members} setMembers={setMembers}/>
				</div>
		</div>
	)}

export default App;
