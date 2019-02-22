import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(data => this.setState({ movies: data }))
  }

  render() {
    const { movies } = this.state;
    console.log(movies)
    return (
      <div>
        <img src={logo} alt="" />
        <div className="container">
          {movies.map((movie) => (
            <div className="card" key={movie.id}>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <h5>Release Date: {movie.release_date}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
