import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovies } from 'fetch';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const fetchQueryMovies = async query => {
    try {
      const response = await getMovies(query);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchQueryMovies(searchParams.get('query'));
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchQueryMovies(query);
    } else {
      setMovies([]);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moviesMarkup =
    movies.length > 0 &&
    movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      );
    });

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type a movie name here..."
          value={searchParams.get('query') || ''}
          onChange={e => setSearchParams({ query: e.target.value })}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>{moviesMarkup}</ul>
    </div>
  );
};

export default Movies;
