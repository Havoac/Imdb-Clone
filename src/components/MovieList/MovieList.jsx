import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? (type != "top-rated" ? type : "popular") : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) =>
        setMovieList(
          type === "top-rated"
            ? data.results.filter((_, index) => index % 2 === 0)
            : data.results
        )
      );
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {Array.isArray(movieList) && movieList.length > 0 ? (
          movieList.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p>Loading or no movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
