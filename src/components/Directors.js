import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies: {movie.movies}</p>
          <p>Genres: </p>
          <ul>
            {movie.genres.map((genre, index) -> (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
