const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWU3MDU4M2UzZTJjYzBmY2I4NjViMjQ0NTE1YWQ1MSIsInN1YiI6IjY0OTg2N2Y1OTU1YzY1MDBjN2FlZjJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.spmomChu1pxtxgfJXLkIEdZqVnZerBWxKn52_1eEjwg',
  },
};

export const getMovies = queryText => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${queryText}&include_adult=false&language=en-US&page=1`,
    options
  );
};

export const getTrendingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
};

export const getMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
};

export const getMovieCredits = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
};

export const getMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
};
