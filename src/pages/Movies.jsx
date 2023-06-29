import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovies } from 'fetch';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryText, setQueryText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: queryText });
  };

  useEffect(() => {
    const fetchQueryMovies = async () => {
      try {
        const response = await getMovies(queryText);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQueryMovies();
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get('query') !== queryText) {
      setQueryText(searchParams.get('query') || '');
    }
  }, [searchParams]);

  const moviesMarkup =
    movies.length > 0 &&
    movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
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
          value={queryText}
          onChange={e => setQueryText(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>{moviesMarkup}</ul>
    </div>
  );
};

export default Movies;
