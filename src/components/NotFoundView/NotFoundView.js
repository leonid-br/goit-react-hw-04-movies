import { NavLink } from 'react-router-dom';
import { link } from '../Navigation/Navigation.module.css';
import { notFound } from './NotFoundView.module.css';

const NotFoundView = () => {
    return (
        <div className={notFound}>
            <h2>The page does not exist</h2>
            <p>
                Return to home page
                <NavLink to="/" className={link}>
                    Click here
                </NavLink>
            </p>
        </div>
    );
};

export default NotFoundView;
