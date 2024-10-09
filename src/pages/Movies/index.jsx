import { movies } from "../../data/movies.js";
import "./Movies.css";

function Movies() {
  return (
    <div>
      <h2>Movies Page</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.tagline}</p>
            <div className="cast">
              <h4>Cast:</h4>
              <ul>
                {movie.cast.map((castMember) => (
                  <li key={castMember.id}>{castMember.character}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
