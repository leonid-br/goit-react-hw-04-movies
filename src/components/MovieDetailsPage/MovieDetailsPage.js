import { useState, useEffect } from 'react';
import {
    useParams,
    useRouteMatch,
    Route,
    NavLink,
} from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import { fetchFilmDetails } from '../../service/filmfetch-api';
import style from './MovieDetailsPage.module.css';
import Loaded from '../Loader';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const [status, setStatus] = useState('idle');
    const [movie, setMovie] = useState('');

    useEffect(() => {
        setStatus('pending');
        fetchFilmDetails(movieId).then(r => {
            setMovie(r);
            setStatus('resolved');
        });
    }, [movieId]);

    if (status === 'idle') {
        return <Loaded />;
    }

    if (status === 'pending') {
        return <Loaded />;
    }

    if (status === 'resolved') {
        return (
            <>
                <div className={style.filmBlock}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.original_title}
                    />
                    <div className={style.filmInfo}>
                        <div className={style.name}>
                            <h2>{movie.original_title}</h2>
                            <span>
                                (
                                {movie.release_date.slice(
                                    0,
                                    4,
                                )}
                                )
                            </span>
                        </div>
                        <p>
                            User Score:{' '}
                            {(movie.vote_average * 100) /
                                10}
                            %
                        </p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>

                        <h3>Genres</h3>
                        {movie.genres && (
                            <p>
                                {movie.genres.map(genre => (
                                    <span
                                        key={genre.id}
                                        className={
                                            style.movieGenre
                                        }
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </p>
                        )}
                    </div>
                </div>
                <hr />

                <div className={style.castReviews}>
                    <h4>Addition information</h4>

                    <NavLink
                        to={`${url}/cast`}
                        activeClassName={style.activeLink}
                    >
                        Cast
                    </NavLink>
                    <br />
                    <NavLink
                        to={`${url}/reviews`}
                        className={style.addInfo}
                        activeClassName={style.activeLink}
                    >
                        Reviews
                    </NavLink>
                </div>

                <hr />

                <Route path={`${url}/cast`}>
                    <Cast movieId={movieId} />
                </Route>
                <Route path={`${url}/reviews`}>
                    <Reviews movieId={movieId} />
                </Route>
            </>
        );
    }
};

export default MovieDetailsPage;
