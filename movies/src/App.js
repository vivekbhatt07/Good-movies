import React, { useState } from "react";
import "./App.css";

const App = () => {
  const action = [
    { movieName: "John Wick", rating: 4.5 },
    { movieName: "The Mechanic", rating: 4.2 },
    { movieName: "The Transporter", rating: 4.4 },
  ];
  const comedy = [
    { movieName: "Dumb & Dumber", rating: 5 },
    { movieName: "The Hangover", rating: 5 },
    { movieName: "Golmaal", rating: 5 },
  ];
  const horror = [
    { movieName: "The Evil Dead", rating: 5 },
    { movieName: "The Incidious", rating: 4.2 },
    { movieName: "The Anabella", rating: 4.5 },
  ];
  const [currentGenre, setCurrentGenre] = useState("");
  const actionHandler = () => {
    setCurrentGenre(
      action.map((item) => {
        return (
          <div className="dynamic">
            <div clasName="dynamic_name">{item.movieName}</div>
            <div className="dynamic_rating">{item.rating} / 5</div>
          </div>
        );
      })
    );
  };

  return (
    <div className="container">
      <div className="static">
        <h1 className="static_head">🎬 Good Movies 🍿</h1>
        <div className="static_subhead">
          Checkout my favourite movies. Select a genere to get started.
        </div>
        <div className="static_genre_navigate">
          <button onClick={actionHandler}>Action</button>
          <button>Comedy</button>
          <button>Horror</button>
        </div>
      </div>
      <div className="dynamic_container">{currentGenre}</div>
    </div>
  );
};

export default App;
