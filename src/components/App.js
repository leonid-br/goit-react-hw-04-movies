import { Route, Switch } from 'react-router';
import HomePage from './HomePage';
import AppBar from './AppBar';
import MoviesPage from './MoviesPage';
import NotFoundView from './NotFoundView';

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

                <Route>
                    <NotFoundView />
                </Route>
            </Switch>
        </>
    );
}
