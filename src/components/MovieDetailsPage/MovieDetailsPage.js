import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchFilmDetails } from '../../service/filmfetch-api';

import Loaded from '../Loader';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');
    const [movie, setMovie] = useState('');

    useEffect(() => {
        setStatus('pending');
        fetchFilmDetails(movieId).then(setMovie);
        setStatus('resolved');
    }, [movieId]);

    if (status === 'idle') {
        return <Loaded />;
    }
    if (status === 'resolved') {
        return (
            <>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.original_title}
                />
            </>
        );
    }
};

export default MovieDetailsPage;
