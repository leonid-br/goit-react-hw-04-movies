import { useEffect, useState } from 'react';
import { fetchFilmReviews } from '../../service/filmfetch-api';

const Reviews = ({ movieId }) => {
    const [movie, setMovie] = useState([1]);

    useEffect(() => {
        fetchFilmReviews(movieId).then(r => setMovie(r.results));
    }, [movieId]);

    return (
        <>
            <ul>
                {movie.length > 0 ? (
                    movie.map(({ id, author, content }) => (
                        <li key={id}>
                            <h4>{author}</h4>

                            <p>{content}</p>
                        </li>
                    ))
                ) : (
                    <h4>There is no reviews</h4>
                )}
            </ul>
        </>
    );
};

export default Reviews;
