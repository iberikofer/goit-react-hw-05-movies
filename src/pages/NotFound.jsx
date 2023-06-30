import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Oops, this page is not found =(</h1>

      <Link to="/">
        <button style={{ borderRadius: 10, padding: 10 }}>
          Go back to Home page
        </button>
      </Link>
    </div>
  );
};

export default Movies;
