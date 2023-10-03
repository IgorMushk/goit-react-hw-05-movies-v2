import MoviesList from 'components/MoviesList/MoviesList';
import { SelectCustom, Title, WrapperSelectTrend } from 'components/MoviesList/MoviesList.styled';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [period, setPeriod] = useState('day');

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await fetchMovies(
          `/trending/movie/${period}?language=en-US`
        );
        setTrendingMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendingMovies();
  }, [period]);
  const onSelectChange = evt => {
    setPeriod(evt.target.value);
  };

  return (
    <>
      <WrapperSelectTrend>
        {period === 'day' ? (
          <Title>Trending today</Title>
        ) : (
          <Title>Trending for a week</Title>
        )}
        <SelectCustom value={period} onChange={onSelectChange}>
          <option value="day">Day</option>
          <option value="week">Week</option>
        </SelectCustom>
      </WrapperSelectTrend>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
