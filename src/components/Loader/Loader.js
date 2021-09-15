import Loader from 'react-loader-spinner';
import { loader } from './Loader.module.css';
const Loaded = () => {
    return (
        <div className={loader}>
            <Loader type="Bars" color="#00BFFF" height={40} width={80} />
        </div>
    );
};
export default Loaded;
