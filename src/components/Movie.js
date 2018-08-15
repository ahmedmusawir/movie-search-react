import React from 'react';

const Movie = props => {
  return (
    <div className="movie-item col-sm-4 col-md-4 col-lg-3">
      <img className="img-fluid" src={props.movieItem.Poster} alt="" />
      <h5>{props.movieItem.Title}</h5>
      <p>
        <strong>Type: </strong>
        {props.movieItem.Type}
      </p>
    </div>
  );
};

export default Movie;
