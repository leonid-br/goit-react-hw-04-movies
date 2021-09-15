import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import AppBar from './AppBar';
import Loaded from './Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
    import(/* webpackChunkName: "HomePage" */ './HomePage'),
);
const MoviesPage = lazy(() =>
    import(/*webpackChunkName: "MoviesPage"*/ './MoviesPage'),
);
const NotFoundView = lazy(() =>
    import(/*webpackChunkName: "NotFoundView"*/ './NotFoundView'),
);
const MovieDetailsPage = lazy(() =>
    import(/*webpackChunkName: "MovieDetailsPage"*/ './MovieDetailsPage'),
);

export default function App() {
    return (
        <>
            <AppBar />
            <Suspense fallback={<Loaded />}>
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
            </Suspense>
        </>
    );
}
