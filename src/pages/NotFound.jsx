import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Oops, this page is not found =(</h1>

      <button style={{ borderRadius: 10, padding: 10 }}>
        <Link to="/">Go back to Home page</Link>
      </button>
    </div>
  );
};

export default Movies;
