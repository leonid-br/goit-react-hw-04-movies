import { useState, useEffect, lazy, Suspense } from 'react';
import {
    useParams,
    useRouteMatch,
    Route,
    Link,
    NavLink,
} from 'react-router-dom';

import { fetchFilmDetails } from '../../service/filmfetch-api';
import style from './MovieDetailsPage.module.css';
import Loaded from '../Loader';
import notPhoto from './notPhoto.jpg';
const Cast = lazy(() => import(/* webpackChunkName: "Cast" */ '../Cast'));
const Reviews = lazy(() =>
    import(/* webpackChunkName: "Reviews" */ '../Reviews'),
);

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const [status, setStatus] = useState('pending');
    const [movie, setMovie] = useState('');

    useEffect(() => {
        fetchFilmDetails(movieId).then(r => {
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
                <button type="button" className={style.btn}>
                    <Link to={`/`}>go to back</Link>
                </button>
                <div className={style.filmBlock}>
                    <img
                        src={
                            movie.backdrop_path
                                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                                : `${notPhoto}`
                        }
                        alt={movie.original_title}
                    />
                    <div className={style.filmInfo}>
                        <div className={style.name}>
                            <h2>{movie.original_title}</h2>
                            <span>({movie.release_date.slice(0, 4)})</span>
                        </div>
                        <p>User Score: {(movie.vote_average * 100) / 10}%</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>

                        <h3>Genres</h3>
                        {movie.genres && (
                            <p>
                                {movie.genres.map(genre => (
                                    <span
                                        key={genre.id}
                                        className={style.movieGenre}
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
                <Suspense fallback={<Loaded />}>
                    <Route path={`${url}/cast`}>
                        <Cast movieId={movieId} />
                    </Route>
                    <Route path={`${url}/reviews`}>
                        <Reviews movieId={movieId} />
                    </Route>
                </Suspense>
            </>
        );
    }
};

export default MovieDetailsPage;
