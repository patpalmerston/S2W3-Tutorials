import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = props => {
	const [movie, setMovie] = useState();

	console.log('props', props);

	const id = props.match.params.id;

	useEffect(() => {
		// change ^^^ that line and grab the id from the URL
		// You will NEED to add a dependency array to this effect hook

		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(response => {
				// console.log('id', props.id);
				setMovie(response.data);
				// console.log('movie component2', movie);
			})
			.catch(error => {
				console.error(error);
			});
	}, [id]);

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = () => {
	//   const addToSavedList = props.addToSavedList;
	//   addToSavedList(movie)
	// }
	console.log('movie component3', movie);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}
	return <MovieCard movie={movie} addToSavedList={props.addToSavedList} />;
};

export default Movie;
