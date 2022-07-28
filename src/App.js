import "./App.css";
import { RiSearch2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=1263886c";

// const movie = {
//   Title: "Batman v Superman: Dawn of Justice",
//   Year: "2016",
//   imdbID: "tt2975590",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return (
    <div>
      <h1 className="App">
        Movie
        <span>
          {" "}
          Nig<span className="span2">ht</span>
        </span>
      </h1>
      <div className="search">
        <div>
          <input
            placeholder="Search movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <RiSearch2Fill
            className="search-icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
