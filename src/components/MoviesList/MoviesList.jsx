import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImgItem, List, MovieItem, MovieTitle, } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  //console.log(location);
  //console.log('MoviesList - movies >>>', movies);

  return  (
    <>
     <List>
        {movies.map(movie => (
            <MovieItem key={movie.id}>
               <Link to={`/movies/${movie.id}`} state={{ from:location}}>
                  <ImgItem
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  />
                  <div>
                  <MovieTitle>{movie.title}</MovieTitle>
                  </div>
                </Link>
             </MovieItem>
            ))}
     </List>
    </>
    )
};

export default MoviesList;
