import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fecthTrending } from '../../service/filmfetch-api';
import { item } from './HomePage.module.css';
import Loaded from '../Loader';

const HomePage = () => {
    const [trendy, setTrendy] = useState([]);
    const [status, setStatus] = useState('pending');
    const { url } = useRouteMatch();

    useEffect(() => {
        fecthTrending().then(r => {
            setTrendy(r.results);
            setStatus('resolved');
        });
    }, []);

    if (status === 'pending') {
        return <Loaded />;
    }

    if (status === 'resolved') {
        return (
            <div>
                <h1>Trending today</h1>

                <ul>
                    {trendy.map(({ original_title, id }) => (
                        <li key={id} className={item}>
                            <Link
                                to={{
                                    pathname: `${url}movies/${id}`,
                                    state: {
                                        from: '/',
                                        label: 'go to trending',
                                    },
                                }}
                            >
                                {original_title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default HomePage;
