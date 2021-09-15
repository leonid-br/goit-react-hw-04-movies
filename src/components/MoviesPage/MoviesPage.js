import { fetchFilmName } from '../../service/filmfetch-api';
import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Loaded from '../Loader';
import Form from '../Form';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('idle');
    const [searchMovies, setSearchMovies] = useState(null);
    const [error, setError] = useState(null);
    const history = useHistory();
    const location = useLocation();

    const onSubmit = e => {
        e.preventDefault();

        setStatus('pending');

        history.push({
            ...location,
            search: `query=${query}`,
        });

        setQuery('');
    };

    const onChange = e => {
        setQuery(e.target.value);
    };

    const queryUrl = new URLSearchParams(location.search).get('query');

    const checkQuery = (r, queryUrl) => {
        if (r.results.length === 0) {
            setStatus('rejected');
            setError(
                `There are no movies on your request ${queryUrl.toUpperCase()}`,
            );
        } else {
            setSearchMovies(r);
            setStatus('resolved');
        }
    };

    useEffect(() => {
        if (location.search === '') {
            return;
        }
        setStatus('pending');

        fetchFilmName(queryUrl).then(r => {
            checkQuery(r, queryUrl);
        });
    }, [location.search, queryUrl]);

    if (status === 'idle') {
        return (
            <div>
                <Form onChange={onChange} onSubmit={onSubmit} value={query} />
            </div>
        );
    }
    if (status === 'pending') {
        return (
            <>
                <div>
                    <Form
                        onChange={onChange}
                        onSubmit={onSubmit}
                        value={query}
                    />
                </div>
                <Loaded />
            </>
        );
    }

    if (status === 'rejected') {
        return (
            <div>
                <Form onChange={onChange} onSubmit={onSubmit} value={query} />

                <h3>{error} </h3>
            </div>
        );
    }

    if (status === 'resolved') {
        return (
            <div>
                <Form onChange={onChange} onSubmit={onSubmit} value={query} />

                {searchMovies && (
                    <ul>
                        {searchMovies.results.map(({ original_title, id }) => (
                            <li key={id}>
                                <Link to={`/movies/${id}`}>
                                    {original_title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
};

export default MoviesPage;
