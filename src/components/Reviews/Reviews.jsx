import { getMovieReviews } from 'fetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [imageReviews, setImageReviews] = useState({});

  useEffect(() => {
    try {
      getMovieReviews(movieId)
        .then(response => response.json())
        .then(response => setImageReviews(response));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const creditsMarkup =
    imageReviews.results &&
    imageReviews.results.map(review => {
      return (
        <li
          key={review.id}
          style={{
            marginBottom: 30,
            border: '1px solid black',
            borderRadius: 5,
          }}
        >
          <span style={{ fontWeight: 'bold', margin: 0 }}>
            Author: {review.author}
          </span>
          <p style={{ margin: 0 }}>Review: {review.content}</p>
          <p>{review.created_at}</p>
        </li>
      );
    });

  return (
    <div style={{ paddingLeft: 30 }}>
      <h2>Credits:</h2>
      {creditsMarkup}
    </div>
  );
};

export default Cast;
