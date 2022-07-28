import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <div className="movies">
        <div className="movie">
          <div className="year">
            <p>{movie.Year}</p>
          </div>
          <div>
            <img
              className="movie-image"
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>
          <div>
            <p className="type">{movie.Type}</p>
          </div>
          <div className="title">
            <h3>{movie.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
