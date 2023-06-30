import { getMovieCredits } from 'fetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [imageCredits, setImageCredits] = useState({});

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        await getMovieCredits(movieId)
          .then(response => response.json())
          .then(response => setImageCredits(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  const creditsMarkup =
    imageCredits.cast &&
    imageCredits.cast.map(person => {
      return (
        <li
          key={person.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 40,
          }}
        >
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVm-NOFWAwzSDCG2503S24gnb6ij0l6Qz1URGonjsEqkf6fmGza-C7SW9iuHQaJj_7sA&usqp=CAU'
            }
            alt={person.name + 'photo'}
            width="200"
          />
          <p style={{ fontWeight: 'bold', margin: 0 }}>{person.name}</p>
          <p style={{ margin: 0 }}>Character: {person.character}</p>
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
