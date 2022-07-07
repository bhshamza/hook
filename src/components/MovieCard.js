import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
    return (
    <figure className="moviee">
  <div className="moviee__hero">
    <img src={movie.posterUrl} alt="" className="moviee__img"/>
  </div>
  <div className="moviee__content">
    <div className="moviee__title">
      <h1 className="heading__primary">{movie.title} <i className="fas fa-fire"></i></h1>
    </div>
    <p className="movie__description">
      {movie.description}
    </p>
    <div className="movie__details">
    <StarRatingComponent
        name="rate1"
        starCount={5}
        value={movie.rate}
      />
      <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock"></i> </span>1h 33m</p>
      <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar">{movie.trailer}</i></span> </p>
      <div className="d-flex justify-content-around">
      </div>
    </div>
  </div>
  <div className="movie__price">15£</div>
</figure>
    )
}

export default MovieCard
