import { actors } from "../../data/actors.js";
import "./Actors.css";

function Actors() {
  return (
    <div>
      <h2>Actors Page</h2>
      <div className="actor-list">
        {actors.map((actor) => (
          <div key={actor.id} className="actor-card">
            <img src={actor.image} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>Popularity: {actor.popularity}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actors;
