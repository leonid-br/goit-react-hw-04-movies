import { NavLink } from 'react-router-dom';
import { link } from '../Navigation/Navigation.module.css';

const NotFoundView = () => {
    return (
        <>
            <h2>
                Запрашиваемой вами страницы не существует
            </h2>
            <p>
                Вернуться на домашнюю страницу
                <NavLink to="/" className={link}>
                    Click here
                </NavLink>
            </p>
        </>
    );
};

export default NotFoundView;
