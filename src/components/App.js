import { Route, Switch } from 'react-router';
import HomePage from './HomePage';
import AppBar from './AppBar';
import MoviesPage from './MoviesPage';
import NotFoundView from './NotFoundView';
import MovieDetailsPage from './MovieDetailsPage';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function App() {
    return (
        <>
            <AppBar />

            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/movies" exact>
                    <MoviesPage />
                </Route>

                <Route path="/movies/:movieId">
                    <MovieDetailsPage />
                </Route>

                <Route>
                    <NotFoundView />
                </Route>
            </Switch>
        </>
    );
}
