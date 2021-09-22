// src/components/MovieList.js

import { useState } from 'react';
import moviesDataJSON from '../movies-data.json';
import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard';


function MovieList() {
  
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const addNewMovie = (newMovie) => {
    const updatedMoviesData = [...moviesData, newMovie];
    const updatedMovies = [...movies, newMovie];

    setMoviesData(updatedMoviesData);
    setMovies(updatedMovies);
  }

  const filterMovieList = (str) => {
    let filteredMovies;

    if (str === 'All') {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter(movie => {
        return movie.title[0].toLowerCase() === str.toLowerCase()
      })
    }
    setMovies(filteredMovies);
  }

  return (
    <div>
    <FilterMovies filterMovieList={filterMovieList} />
    <AddMovie addNewMovie={addNewMovie} />
      <h2>Movie List</h2>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
