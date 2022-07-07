import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
    return (
    <div className="">
        <div>
        {movies.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        </div>
    
    </div>

    )
}

export default MovieList
