import React from 'react';

function Member(props) {
	console.log('Member', props)
	return (
		<div className='memberList'>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.member.name}</td>
						<td>{props.member.email}</td>
						<td>{props.member.role}</td>
						<td>
							<button className="button muted-button">Edit</button>
							<button className="button muted-button">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>	 
		</div>
	);
}

export default Member;
