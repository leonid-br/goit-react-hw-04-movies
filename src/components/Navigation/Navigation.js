import { NavLink } from 'react-router-dom';
import { link, activeLink } from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink
            exact
            to="/"
            className={link}
            activeClassName={activeLink}
        >
            Home
        </NavLink>

        <NavLink
            to="/movies"
            className={link}
            activeClassName={activeLink}
        >
            Movies
        </NavLink>
    </nav>
);

export default Navigation;
