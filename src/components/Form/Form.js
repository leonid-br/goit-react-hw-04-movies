import style from './Form.module.css';
const Form = ({ onChange, onSubmit, query }) => {
    return (
        <form className={style.form} onSubmit={onSubmit}>
            <input
                type="text"
                className={style.input}
                placeholder="enter film"
                onChange={onChange}
                value={query}
            />
            <button type="submit" className={style.btn}>
                Search
            </button>
        </form>
    );
};
export default Form;
