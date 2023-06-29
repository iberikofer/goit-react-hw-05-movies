import { getTrendingMovies } from 'fetch';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovieDetails from '../components/MovieDetals/MovieDetails';

export const Home = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        await getTrendingMovies()
          .then(response => response.json())
          .then(response => setMoviesArr(response.results));
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  const moviesMarkup = moviesArr.map(movie => {
    if (movie.title) {
      return (
        <li key={movie.id} style={{ marginBottom: 10 }}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      );
    } else {
      return '';
    }
  });

  return (
    <div>
      <h1 style={{ marginLeft: 40 }}>Movies on trend for today:</h1>
      <ul>{moviesMarkup}</ul>
    </div>
  );
};

export default Home;
