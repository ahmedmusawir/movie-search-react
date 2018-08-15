import React, { Component } from 'react';
import Movie from './Movie';
import Page404 from './Page404';

const MovieList = props => {
  let results = props.data;
  let movies;
  if (results.length > 0) {
    movies = results.map(movie => (
      <Movie key={movie.imdbID} movieItem={movie} />
    ));
  } else {
    movies = <Page404 />;
  }

  return (
    <ul className="movie-list container">
      <span className="row">{movies}</span>
    </ul>
  );
};

export default MovieList;
