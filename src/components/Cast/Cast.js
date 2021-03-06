import { useEffect, useState } from 'react';
import { fetchFilmActors } from '../../service/filmfetch-api';
import patrik from './nonPhoto.jpg';
import Loaded from '../Loader';

import style from './Cast.module.css';

const Cast = ({ movieId }) => {
    const [movie, setMovie] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        fetchFilmActors(movieId).then(r => {
            setMovie(r);
            setStatus('resolved');
        });
    }, [movieId]);

    if (status === 'pending') {
        return <Loaded />;
    }
    if (status === 'resolved') {
        return (
            <>
                {movie && (
                    <ul className={style.gallery}>
                        {movie.cast.map(
                            ({ name, id, character, profile_path }) => (
                                <li key={id} className={style.gallery}>
                                    <div>
                                        <img
                                            src={
                                                profile_path
                                                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                                                    : `${patrik}`
                                            }
                                            alt={name}
                                            width={100}
                                            height={100}
                                        />
                                        <div className={style.info}>
                                            <p>{name}</p>
                                            <p>Character: {character}</p>
                                        </div>
                                    </div>
                                </li>
                            ),
                        )}
                    </ul>
                )}
            </>
        );
    }
};

export default Cast;
