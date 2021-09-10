import style from './MoviesPage.module.css';

const MoviesPage = () => {
    return (
        <div>
            <form className={style.form}>
                <input
                    type="text"
                    className={style.input}
                    placeholder="enter film"
                />
                <button type="submit" className={style.btn}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default MoviesPage;
