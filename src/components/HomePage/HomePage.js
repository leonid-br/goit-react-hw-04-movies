import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    fecthTrending,
    // fetchFilmName,
    // fetchFilmDetails,
    // fetchFilmActors,
} from '../../service/filmfetch-api';
import { item } from './HomePage.module.css';

const HomePage = () => {
    const [trendy, setTrendy] = useState([]);
    useEffect(() => {
        fecthTrending().then(r => setTrendy(r.results));
    }, []);

    // console.log('HomePage ~ trendingFilms', trendy);
    // fetchFilmName('interstellar');
    // fetchFilmDetails(157336);
    // fetchFilmActors(157336); original_title
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {trendy.map(({ original_title, id }) => (
                    <li key={id} className={item}>
                        <Link to="/movies/:movieId">
                            {original_title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
