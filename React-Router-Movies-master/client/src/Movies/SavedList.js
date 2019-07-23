import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
	console.log('savedlist props', props);
	return (
		<div className='saved-list'>
			<h3>Saved Movies:</h3>
			{props.list.map(movie => {
				console.log('savedList', movie);
				return <span className='saved-movie'>{movie && movie.title}</span>;
			})}
			{/* <div className="home-button" onClick={}>Home</div> */}
			<Link className='home-button' to='/'>
				Home
			</Link>
		</div>
	);
};

export default SavedList;
