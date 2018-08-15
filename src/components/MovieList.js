import React, { Component } from 'react';
import Movie from './Movie';

const MovieList = props => {
  const results = props.data;
  let movies = results.map(movie => (
    <Movie key={movie.imdbID} movieItem={movie} />
  ));

  return (
    <ul className="movie-list container">
      <span className="row">{movies}</span>
    </ul>
  );
};

export default MovieList;
