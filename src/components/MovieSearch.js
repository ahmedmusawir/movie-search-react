import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount() {}

  performSearch = query => {
    axios
      .get(`http://www.omdbapi.com/?apikey=ea71a8f&s=${query}`)
      .then(response => {
        // console.log(response.data.Search);
        this.setState({ movies: response.data.Search });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render() {
    console.log(this.state.movies);

    return (
      <div className="container">
        <div className="main-header">
          <h1 className="main-title pt-5">Movie Search</h1>
          <SearchForm onSearch={this.performSearch} />
        </div>
        <div className="main-content">
          <MovieList data={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default Movies;
