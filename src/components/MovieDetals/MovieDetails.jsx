import { getMovieDetails } from 'fetch';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchDedailts = async () => {
      await getMovieDetails(movieId)
        .then(response => response.json())
        .then(response => setSelectedMovie(response));
    };
    fetchDedailts();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Link to={backLinkHref}>
            <button style={{ borderRadius: 10, padding: 10, marginTop: 10 }}>
              ☚ Go back
            </button>
          </Link>
          <div style={{ padding: 20 }}>
            {
              <img
                src={
                  selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
                }
                alt={selectedMovie.title}
              />
            }
          </div>
        </div>

        <div>
          <h2>{selectedMovie.title}</h2>
          <h3>User Score: </h3>
          {selectedMovie.vote_average}
          <h3>Overview</h3>
          <span>{selectedMovie.overview}</span>
          <h3>Genres</h3>
          <div style={{ display: 'flex' }}>
            {selectedMovie.genres?.map((genre, index) => {
              return (
                <div
                  key={selectedMovie.title + index}
                  style={{ paddingRight: 10 }}
                >
                  {genre.name}
                </div>
              );
            })}
          </div>
          <Link to={`/movies/${movieId}/cast`}>
            <button style={{ margin: 20 }}>Cast</button>
          </Link>
          <Link to={`/movies/${movieId}/reviews`}>
            <button style={{ margin: 20 }}>Reviews</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
